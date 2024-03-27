export const MOCK_SOLEPROPS_CHEDULEC_DATA = {
  year2022_scheduleC: {
    netProfitLoss: 100000,
    depreciation: 10000,
    depletion: 20000,
    amortization: 0,
    mealAndEntertainment: 5000,
    expenseForBusiness: 2000,
    w2: 20000,
  },
  year2023_scheduleC: {
    netProfitLoss: 150000,
    depreciation: 10000,
    depletion: 20000,
    amortization: 0,
    mealAndEntertainment: 5000,
    expenseForBusiness: 2000,
    w2: 20000,
  },
};
export const MOCK_Coprs1120_DATA = {
  year2022_1120: {
    taxableIncome: 100000,
    totalTax: 30000,
    depreciation: 20000,
    depletion: 0,
    amortization: 0,
    mortgagePayable: 0,
    percentageOwnership: 1,
    mealAndEntertainment: 5000,
    w2: 20000,
  },
  year2023_1120: {
    taxableIncome: 200000,
    totalTax: 50000,
    depreciation: 20000,
    depletion: 0,
    amortization: 0,
    mortgagePayable: 0,
    percentageOwnership: 1,
    mealAndEntertainment: 5000,
    w2: 50000,
  },
};
export const MOCK_SCoprs1120S_DATA = {
  year2022_1120S: {
    ordinaryIncomeK1: 100000,
    rentalIncomeK1: 100000,
    otherGrossRentalIncome: 30000,

    depreciation: 20000,
    depletion: 0,
    amortization: 6000,
    mortgagePayable: 0,
    percentageOwnership: 1,
    mealAndEntertainment: 5000,
    w2: 20000,
  },
  year2023_1120S: {
    ordinaryIncomeK1: 200000,
    rentalIncomeK1: 100000,
    otherGrossRentalIncome: 30000,

    depreciation: 20000,
    depletion: 0,
    amortization: 6000,
    mortgagePayable: 0,
    percentageOwnership: 1,
    mealAndEntertainment: 5000,
    w2: 20000,
  },
};
export const MOCK_PARTNERSHIP1065_DATA = {
  year2022_1065: {
    ordinaryIncomeK1: 300000,
    rentalIncomeK1: 100000,
    otherGrossRentalIncome: 30000,

    depreciation: 20000,
    depletion: 0,
    amortization: 6000,
    mortgagePayable: 0,
    percentageOwnership: 1,
    mealAndEntertainment: 5000,
    w2: 20000,
  },
  year2023_1065: {
    ordinaryIncomeK1: 500000,
    rentalIncomeK1: 100000,
    otherGrossRentalIncome: 30000,

    depreciation: 20000,
    depletion: 0,
    amortization: 6000,
    mortgagePayable: 0,
    percentageOwnership: 1,
    mealAndEntertainment: 5000,
    w2: 20000,
  },
};
export const Mock_FederalTax1040_SCHEDULEC = {
  fileData: {
    personalInfo: {
      firstName: "",
      lastName: "",
      ssn: "",
      join_ssn: "",
      join_firstName: "",
      join_lastName: "",
      detailHomeAddress: {
        homeAddress: "",
        aptNo: "",
        City: "",
        State: "",
        zipCode: "",
      },
      signHere: {
        firstName: "",
        lastName: "",
        join_firstName: "",
        join_lastName: "",
      },
    },
    data: {
      w2_1a: "",

      nameOfProprietor: "",
      ssn: "",
      businessName: "",
      businessAddress: "",
      netProfitLoss: 0,
      depreciation: 0,
      depletion: 0,
      amortization: 0,
      mealAndEntertainment: 0,
      expenseForBusiness: 0,
    },
    year: {
      year: 2022,
    },
    documentType: "scheduleC",
  },
};
export const Mock_FORM1065 = {
  fileData: {
    personalInfo: {},
    companyInfo: {
      name: "",
      address: "",
      dateIncorporated: "",
      signHere: "",
      date: "",
    },
    data: {
      ordinaryIncomeK1: 300000,
      rentalIncomeK1: 100000,
      otherGrossRentalIncome: 30000,
      depreciation: 20000,
      depletion: 0,
      amortization: 6000,
      mortgagePayable: 0,
      percentageOwnership: 1,
      mealAndEntertainment: 5000,
      // w2: 20000, need to check the amount in W-2 so we can know the total income for partnership
    },
    year: {
      year: 2022,
    },
    documentType: "form1065",
  },
};
export const Mock_CORPORATION1120 = {
  fileData: {
    personalInfo: {},
    companyInfo: {
      name: "",
      address: "",
      dateIncorporated: "",
      signHere: "",
      date: "",
    },
    data: {
      taxableIncome: 100000,
      totalTax: 30000,
      depreciation: 20000,
      depletion: 0,
      amortization: 0,
      mortgagePayable: 0,
      percentageOwnership: 1,
      mealAndEntertainment: 5000,

      // w2: 20000, need to check the amount in W-2 so we can know the total income for 1120
    },
    year: {
      year: 2022,
    },
    documentType: "form1120",
  },
};
export const Mock_CORPORATION1120S = {
  fileData: {
    personalInfo: {
      name: "",
      address: "",
      dateIncorporated: "",
      signHere: "",
      date: "",
    },
    companyInfo: {
      name: "",
      address: "",
      dateIncorporated: "",
      signHere: "",
      date: "",
    },
    data: {
      ordinaryIncomeK1: 0,
      rentalIncomeK1: 0,
      otherGrossRentalIncome: 0,

      depreciation: 0,
      depletion: 0,
      amortization: 0,
      mortgagePayable: 0,
      percentageOwnership: 1,
      mealAndEntertainment: 0,

      // w2: 20000, need to check the amount in W-2 so we can know the total income for 1120s
    },
    year: {
      year: 2022,
    },
    documentType: "form1120S",
  },
};
