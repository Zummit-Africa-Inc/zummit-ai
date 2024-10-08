import {
	forwardRef,
	ForwardRefExoticComponent,
	ForwardRefRenderFunction,
	PropsWithoutRef,
	RefAttributes,
} from "react"

/**
 * Wraps `React.forwardRef` and applies a semantic `displayName` and
 * `defaultProps` without side effects.
 *
 * This wrapper is required to properly tree-shake `React.forwardRef`
 * components, otherwise the minifier can't understand that `defaultProps` and
 * `displayName` are pure.
 */

type DefaultProps<P> = Partial<PropsWithoutRef<P>>

export function forwardRefWrapper<T, P = {}>(
	name: string,
	defaultPropsOrRender: DefaultProps<P> | ForwardRefRenderFunction<T, P> | undefined,
	definitelyRender?: ForwardRefRenderFunction<T, P>
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
	const render = isRenderFunction(defaultPropsOrRender)
		? defaultPropsOrRender
		: definitelyRender
	const defaultProps = isRenderFunction(defaultPropsOrRender) ? {} : defaultPropsOrRender

	const component = forwardRef(render as ForwardRefRenderFunction<T, P>)
	component.displayName = name
	component.defaultProps = defaultProps

	return component
}

function isRenderFunction<T, P>(
	value: DefaultProps<P> | ForwardRefRenderFunction<T, P> | undefined
): value is ForwardRefRenderFunction<T, P> {
	return typeof value === "function"
}
