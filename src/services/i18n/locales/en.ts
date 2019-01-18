// tslint:disable:max-line-length
export default {
  shared: {
    menu: {
      dashboard: 'Dashboard',
      marketplace: 'Marketplace',
      profile: 'Profile',
    },
    validation: {
      isRequired: 'Field is required',
      moreThenOrEqual: 'Should be more then or equal %{value}',
      lessThenOrEqual: 'Should be less then or equal %{value}',
      invalidWalletAddress: 'Invalid wallet address',
    },
    pageNotFound: 'We can’t find this page',
    copiedAtClipboard: 'Copied at clipboard',
  },
  components: {
    fund: {
      commissionLabel: 'Commission',
      policyLabel: 'Policy',
    },
  },
  features: {
    signTransaction: {
      title: 'Sign transaction',
      description: 'Scan this QR code with your mobile device to continue transaction',
      openApp: 'Open application',
      copyLink: 'Copy link',
    },
    signUp: {
      fields: {
        userName: 'Name',
        surname: 'Surname',
      },
      submit: 'Sign in',
      title: 'Sign in',
    },
    getInFund: {
      getButton: 'Get in fund',
      modalTitle: 'Choice of conditions',
      form: {
        fields: {
          regularPayment: 'Regular payment size',
          periodicity: 'Payment\'s periodicity',
          retirementDate: 'Retirement date',
          wallet: 'Contributor\'s wallet',
        },
        periodicityItemPrefix: 'once per',
        walletHint: 'If contributions to fund are made by 3rd party (employer, state, friends and family), please insert contributor\'s ethereum address.',
        submitButton: 'Get in fund',
        cancelButton: 'Cancel',
      },
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
    contributors: {
      addNew: 'AddNew',
    },
    dashboard: {
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
      noFunds: 'No funds',
      findFundsAtMarket: 'Find some funds in our marketplace',
      findFunds: 'Find fund',
    },
    transactions: {
      date: 'Date',
      fundName: 'Fund Name',
      sender: 'Sender',
      receiver: 'Receiver',
      type: 'Type',
      amount: 'Amount',
    },
  },
  documents: {},
  modules: {
    dashboard: {
      dashboard: 'Dashboard',
      transactions: 'Transactions',
    },
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
