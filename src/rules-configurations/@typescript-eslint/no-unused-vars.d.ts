import { RuleConfigurationOverride } from '../../../support/Rule'

import BaseConfiguration from '../eslint/no-unused-vars.d'

type Configuration = RuleConfigurationOverride<BaseConfiguration, '@typescript-eslint/no-unused-vars', '@typescript-eslint/eslint-plugin'>

export default Configuration