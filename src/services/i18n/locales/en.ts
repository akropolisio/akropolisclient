// tslint:disable:max-line-length
export default {
  shared: {
    menu: {
      dashboard: 'Dashboard',
      marketplace: 'Marketplace',
      profile: 'Profile',
    },
  },
  features: {
    signTransaction: {
      title: 'Sign transaction',
      description: 'Scan this QR code with your mobile device to continue transaction',
    },
    dashboard: {
      dashboard: 'Dashboard',
      hint: {
        incomeMonthly: 'Monthly payments upon retirement age',
      },
    },
  },
  documents: {},
  modules: {
    auth: {
      signIn: 'Sign in',
      signUp: 'Sign up',
      roles: {
        title: {
          beneficiary: 'Beneficiary',
          fundOwner: 'Fund owner',
          boardMember: 'Board member',
          assetManager: 'Asset manager',
        },
        hint: {
          beneficiary: 'Individual saver that acts as a provider of capital',
          fundOwner: 'A creator of an Pension Fund',
          boardMember: 'Party responsible for Asset Manager selection',
          assetManager: 'Party responsible for investment management of Pension Fund’s',
        },
      },
      authForm: {
        subTitle: 'decentralised pensions and savings infrastructure',
        title: 'a trustless financial future for everyone',
        selectRole: 'select your role',
      },
    },
  },
  demo: {
    selectedLang: 'Selected language is %{locale}',
    selectorLabel: 'Language selector:',
    somethingText: 'Something text',
    pluralLabel: 'Pluralize demonstration:',
    pluralTest: '%{smart_count} object |||| %{smart_count} objects',
  },
};
