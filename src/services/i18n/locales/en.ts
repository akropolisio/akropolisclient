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
    signUp: {
      fields: {
        userName: 'Name',
        surname: 'Surname',
      },
      submit: 'Sign in',
      title: 'Sign in',
    },
    userSettings: {
      fields: {
        userName: 'Name',
        surname: 'Surname',
      },
      submit: 'Save',
      cancel: 'Cancel',
      title: 'Profile',
    },
    dashboard: {
      dashboard: 'Dashboard',
      hint: {
        incomeMonthly: 'Monthly payments upon retirement age',
      },
    },
    funds: {
      activeFunds: 'Active Funds',
      notActiveFunds: 'Not active Funds',
      deposit: 'deposit',
      policy: 'Policy',
      pensionDate: 'Pension date',
      totalSum: 'Total sum',
      incomeMonthly: 'Income monthly',
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
    marketplace: {
      fundsMarketplace: 'Funds marketplace',
      commission: 'Commission',
      policy: 'Policy',
      getInFund: 'Get in fund',
      YouAreInThisFund: 'You’re in this fond',
    },
    profile: {
      title: 'Profile',
      settings: 'Settings',
      contributors: 'Contributors',
      heirs: 'Heirs',
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
