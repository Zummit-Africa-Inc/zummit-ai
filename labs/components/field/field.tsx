/**
 * 📝 Notes for Contributors:
 *
 * @description
 *
 * - When creating an interactive component, we recommend consuming the
 * component hook created.
 * - Ensure the component is composable and can adapt to multiple use-cases
 *
 * Bootstrapped by Plop
 */

import { AnimatePresence, motion } from "framer-motion"
import React, { useCallback, useMemo } from "react"
import { Eye, EyeOff } from "lucide-react"
import classNames from "classnames"

import type { NativeElementProps, Prettify } from "../../utils/types/utility"
import { useFormField } from "./form-field"
import styles from "./field.module.scss"
import {
	cleanText,
	createErrorWithCode,
	forwardRefWrapper,
	generateUUID,
} from "../../utils"

type FieldElementTypes = "select" | "input" | "textarea"
type FieldInputTypes =
	| "text"
	| "email"
	| "password"
	| "number"
	| "tel"
	| "url"
	| "search"
	| "date"

export interface FieldProps {
	/**
	 * The label for the field
	 */
	label?: string | React.ReactNode

	/**
	 * The leading icon for the field
	 */
	leadingIcon?: React.ReactNode

	/**
	 * The trailing icon for the field
	 */
	trailingIcon?: React.ReactNode

	/**
	 * Autocomplete attribute for the field
	 */
	autocomplete?: string

	/**
	 * The type of the field
	 */
	type?: FieldInputTypes

	/**
	 * The name of the field
	 */
	name?: string

	/**
	 * The value of the field
	 */
	value?: string

	/**
	 * Validation rules for the field (onBlur, onChange)
	 */
	validationMode?: "onBlur" | "onChange"

	/**
	 * Validation pattern for the field
	 */
	validationPattern?: keyof typeof validationMap | string

	/**
	 * check if the field is required
	 */
	required?: boolean

	/**
	 * Error message to display
	 */
	error?: string

	/**
	 * allow password hint display
	 */
	passwordHint?: boolean

	/**
	 * rounded corners
	 */
	rounded?: boolean

	/**
	 * disable the field
	 * @default false
	 */
	disabled?: boolean

	/**
	 * disable the animation
	 */
	noAnimation?: boolean

	/**
	 * reset input if the value is invalid
	 */
	resetOnInvalid?: boolean
	/**
	 * wrapper class name
	 */
	wrapperClassName?: string
	/**
	 * Callback function that is fired when the user types in the input.
	 */
	options?: {
		value: string
		label: string
		disabled?: boolean
	}[]
}

/**
 * Creates the dynamic component type based on the passed in component
 * @param T - The component type
 */
export type FieldInstance<T> = Prettify<
	FieldProps & (T extends FieldElementTypes ? NativeElementProps<T> : never)
>

/* Creating a map of validation functions. */
const validationMap = {
	required: (value: string) => value?.trim()?.length > 0,

	email: (value: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(String(value).toLowerCase())
	},

	username: (value: string) => {
		const re = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/
		return re.test(String(value))
	},

	password: (value: string) => {
		const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z])(?=.{8,})/
		return re.test(String(value))
	},
}

export const fieldFactory = <T extends FieldElementTypes>(component: T) =>
	forwardRefWrapper<NativeElementProps<T>, FieldInstance<T | "input">>(
		`Field.${component}`,
		{
			children: null,
			required: false,
			autocomplete: "off",
			validationMode: "onBlur",
			passwordHint: true,
			rounded: false,
			noAnimation: false,
			disabled: false,
		},
		(props, ref) => {
			const {
				type,
				name,
				value,
				error,
				label,
				rounded,
				required,
				children,
				disabled,
				noAnimation,
				leadingIcon,
				passwordHint,
				trailingIcon,
				autocomplete,
				validationMode,
				resetOnInvalid,
				wrapperClassName,
				validationPattern,

				//----------------------------------------------------------------
				...rest
			} = props
			const { _setFormFieldCanSubmit: setCanSubmit } = useFormField()

			if (!name && required)
				throw createErrorWithCode(
					"field-name-required",
					`Field.${component}`,
					"name prop is required when required is true"
				)

			const Component = (component || "input") as React.ElementType

			const fieldId = useMemo(() => generateUUID(), [])

			const [invalid, setInvalid] = React.useState({
				message: "",
				password: {
					length: false,
					number: false,
					lowercase: false,
					uppercase: false,
				},
			})

			const [isDirty, setIsDirty] = React.useState(false)
			const [passwordVisible, setPasswordVisible] = React.useState(false)

			const getType = useMemo(() => {
				const isPassword = passwordVisible ? "text" : "password"

				return type === "password" ? isPassword : type
			}, [type, passwordVisible])

			const validateValue = useCallback(
				(e: React.ChangeEvent<NativeElementProps<T>>) => {
					const _val = (e.target as any).value! || value
					const idleState = {
						message: "",
						password: {
							length: false,
							number: false,
							lowercase: false,
							uppercase: false,
						},
					}

					const messageType = name || label?.toString() || type || "field"

					if (!isDirty && !required) return

					setCanSubmit?.((prev: any) => ({
						...prev,
						[messageType!]: true,
					}))

					if (required && !validationMap.required(_val!)) {
						setCanSubmit?.((prev: any) => ({
							...prev,
							[messageType!]: false,
						}))

						return setInvalid({
							...idleState,
							message: error ?? `The ${cleanText(messageType)} field is required`,
						})
					}

					if (
						validationPattern ||
						(Object.keys(validationMap).includes(type || "") && _val.length > 0)
					) {
						const canBeValidMap =
							typeof validationPattern === "string" &&
							Object.keys(validationMap).includes(validationPattern.replaceAll("/", ""))
								? validationPattern
								: null

						if (
							!validationMap[
								(canBeValidMap as keyof typeof validationMap) ||
									(type as keyof typeof validationMap) ||
									""
							]?.(_val)
						) {
							setCanSubmit?.((prev: any) => ({
								...prev,
								[messageType]: false,
							}))

							if (resetOnInvalid) return ((e.target as any).value = "")

							return setInvalid((prev) => ({
								...prev,
								message: `The ${cleanText(messageType)} field is not valid`,
								password: {
									length: _val.length >= 8,
									number: /[0-9]/.test(_val) || /[^A-Za-z0-9]/.test(_val),
									lowercase: /[a-z]/.test(_val),
									uppercase: /[A-Z]/.test(_val),
									justNumbers: /[0-9]/.test(_val),
									justSymbols: /[^A-Za-z0-9]/.test(_val),
								},
							}))
						}

						if (!canBeValidMap && validationPattern) {
							const convertStringToRegex = (str: string) => {
								const [_, flags] = str.split("/")

								if (!flags)
									throw createErrorWithCode("invalid-regex", "Field", "Invalid regex pattern")

								return new RegExp(flags)
							}

							if (!convertStringToRegex(validationPattern as string)?.test(_val))
								return setInvalid((prev) => ({
									...prev,
									message: `The ${cleanText(messageType)} field is not valid 'ffff`,
								}))
						}
					}

					return setInvalid((prev) => ({
						...prev,
						message: "",
					}))
				},
				[
					required,
					type,
					value,
					error,
					name,
					isDirty,
					resetOnInvalid,
					label,
					setCanSubmit,
					validationPattern,
				]
			)

			return (
				<AnimatePresence mode="wait">
					<fieldset
						className={classNames([styles.FieldSet])}
						disabled={disabled}
						aria-disabled={disabled}
						data-amlabs-fieldset={component}>
						{label && (
							<motion.label
								layout={!noAnimation ? "size" : false}
								htmlFor={fieldId}
								className={styles.FieldLabel}>
								{label} {required && <span className={styles.FieldRequired}>*</span>}
							</motion.label>
						)}

						<motion.div
							layout={!noAnimation ? "size" : false}
							data-amlabs-field-wrapper={component}
							className={classNames([
								styles.FieldWrapper,
								"field-wrapper__container",
								rounded && styles.rounded,
								disabled && styles.disabled,
								wrapperClassName,
							])}>
							{leadingIcon && (
								<div
									className={classNames([styles.leadingIcon, "leading-icon"])}
									aria-hidden="true">
									{leadingIcon}
								</div>
							)}

							<Component
								aria-required={required}
								id={fieldId}
								required={required}
								data-testid="field-input"
								aria-invalid={!!invalid.message}
								ref={ref}
								data-amlabs-field={component}
								type={getType}
								name={name}
								value={value}
								autoComplete={autocomplete}
								disabled={disabled}
								{...rest}
								onChange={(e: React.ChangeEvent<NativeElementProps<T>>) => {
									if (!required)
										setCanSubmit?.((prev: any) => ({
											...prev,
											[name || label?.toString() || type || "field"]: true,
										}))

									if (value && value?.length > 1) setIsDirty(true)

									if (
										(validationMode === "onChange" && required && isDirty) ||
										(type === "password" && required)
									)
										validateValue(e)

									return rest.onChange?.(e as any)
								}}
								onKeyDown={(e: React.KeyboardEvent<NativeElementProps<T>>) => {
									if (e.key === "Enter") {
										if (required && isDirty) validateValue(e as any)
									}

									return rest.onKeyDown?.(e as any)
								}}
								onBlur={(e: React.ChangeEvent<NativeElementProps<T>>) => {
									if (!isDirty && type !== "password") setIsDirty(true)

									if (!required)
										setCanSubmit?.((prev: any) => ({
											...prev,
											[name || label?.toString() || type || "field"]: true,
										}))

									if (validationMode === "onBlur" && required) validateValue(e)
									return rest.onBlur?.(e as any)
								}}>
								{component === "select" && rest.options
									? rest?.options?.map((option) => (
											<option key={option.value} value={option.value} disabled={option.disabled}>
												{option.label}
											</option>
										))
									: children}
							</Component>

							{type === "password" && (
								<button
									aria-label={`${passwordVisible ? "Hide" : "Show"} Password`}
									className={classNames([
										styles.FieldPasswordToggle,
										passwordVisible && styles.FieldPasswordToggleActive,
									])}
									type="button"
									onClick={(e) => {
										e.preventDefault()
										e.stopPropagation()
										setPasswordVisible(!passwordVisible)
									}}>
									{passwordVisible ? <EyeOff /> : <Eye />}
								</button>
							)}
							{trailingIcon && (
								<div
									className={classNames([styles.trailingIcon, "trailing-icon"])}
									aria-hidden="true">
									{trailingIcon}
								</div>
							)}
						</motion.div>

						{!!invalid.message && (
							<motion.div
								className={styles.FieldError}
								role="alert"
								layout={!noAnimation ? "size" : false}
								aria-describedby={fieldId}
								aria-live="assertive"
								aria-atomic="true">
								{invalid.message}
							</motion.div>
						)}
					</fieldset>
				</AnimatePresence>
			)
		}
	)
