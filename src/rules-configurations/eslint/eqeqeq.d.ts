import { RuleConfiguration } from '../../../support/Rule'

type Options = (("always") | {
	"null"?: "always" | "never" | "ignore"
})[] | (("smart" | "allow-null"))[]

type Configuration = RuleConfiguration<'eqeqeq', 'eslint', Options>

export default Configuration