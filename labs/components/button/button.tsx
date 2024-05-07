import classNames from "classnames"
import Link from "next/link"
import React from "react"

import type { NativeElementProps, Prettify } from "../../utils/types/utility"
import styles from "./button.module.scss"
import { forwardRefWrapper } from "../../utils"
import { Spinner } from "../spinner"

type ButtonSize = "xs" | "sm" | "md" | "lg" | "block"
type ButtonTheme = "primary" | "secondary" | "clear" | "error"
type ButtonElement = "button" | "a"

// type Ref = HTMLButtonElement | HTMLAnchorElement

/**
 * Creates the dynamic component type based on the passed in component
 * @param T - The component type
 */
type ButtonComponent<T> = Prettify<
	ButtonProps & (T extends ButtonElement ? NativeElementProps<T> : never)
>

export interface ButtonProps {
	/**
	 * Decides whether the Button is outlined or not
	 * @default false
	 */
	outline?: boolean
	/**
	 * Decides whether the Button is disabled or not
	 * @default false
	 */
	disabled?: boolean
	/**
	 * Decides the Button size
	 * @default 'md'
	 */
	size?: ButtonSize
	/**
	 * Decides the Button variant
	 * @default 'primary'
	 */
	variant?: ButtonTheme
	/**
	 * Decides the Button leading icon
	 * @default undefined
	 */
	leadingIcon?: React.ReactElement
	/**
	 * Decides the Button trailing icon
	 * @default undefined
	 */
	trailingIcon?: React.ReactElement
	/**
	 * Decides whether the Button is loading or not
	 */
	isLoading?: boolean
	/**
	 * Decides the Button loading module
	 */
	loadingText?: string | React.ReactNode
}

const createButtonComponent = <T extends ButtonElement>(component: T) =>
	forwardRefWrapper<NativeElementProps<T>, ButtonComponent<T | "button">>(
		"Button",
		{
			children: null,
			className: undefined,
			disabled: false,
			outline: false,
			variant: "primary",
			size: "md",
		},
		(
			{
				children,
				className,
				disabled = false,
				outline = false,
				variant = "primary",
				size = "md",
				isLoading = false,
				loadingText = null,
				leadingIcon,
				trailingIcon,
				...otherProps
			},
			ref
		) => {
			const Component = (component || "button") as React.ElementType

			const classes = classNames([
				styles.Button,
				outline && styles[`Button${variant}-outline`],
				variant && !outline && styles[`Button${variant}`],
				size && styles[size],
				disabled && styles.disabled,
				leadingIcon || trailingIcon ? styles.icon : "",
				className,
			])

			const spinnerSize = {
				sm: 14,
				xs: 12,
				md: 16,
				lg: 18,
				block: 20,
			}

			return (
				<Component
					ref={ref}
					className={classes}
					disabled={disabled || isLoading}
					data-bc-component="Button"
					{...otherProps}>
					{isLoading && (
						<Spinner
							size={spinnerSize[size as keyof typeof spinnerSize]}
							thickness="2"
							spinner="default"
							isLoading={isLoading}
							color={variant === "primary" && !outline ? "#0f1f2e" : undefined} // we need explicit colors here so we can get the right contrast
						/>
					)}

					<>
						{isLoading ? (
							loadingText
						) : (
							<>
								{leadingIcon && <span className={styles.leadingIcon}>{leadingIcon}</span>}
								{children}
								{trailingIcon && <span className={styles.trailingIcon}>{trailingIcon}</span>}
							</>
						)}
					</>
				</Component>
			)
		}
	)

/**
 * Component that renders a call to action button
 * @param {ButtonProps} props - The Button props
 * @returns {React.ReactElement} - The Button component
 *
 * @example
 * <Button>Click Me</Button>
 * <Button variant="secondary">Click Me</Button>
 * <Button variant="secondary" outline>Click Me</Button>
 * <Button variant="secondary" size="lg">Click Me</Button>
 */
export const Button = Object.assign(createButtonComponent("button"), {
	a: createButtonComponent(Link as unknown as "a"),
	button: createButtonComponent("button"),
})
