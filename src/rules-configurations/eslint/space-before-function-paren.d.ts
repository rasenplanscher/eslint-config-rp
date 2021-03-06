import { RuleConfiguration } from '../../../support/Rule'

type Options = ((("always" | "never") | {
	anonymous?: "always" | "never" | "ignore"
	named?: "always" | "never" | "ignore"
	asyncArrow?: "always" | "never" | "ignore"
}))[]

type Configuration = RuleConfiguration<'space-before-function-paren', 'eslint', Options>

export default Configuration