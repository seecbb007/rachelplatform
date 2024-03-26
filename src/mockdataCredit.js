export const mockData = {
  mortgageApplication: {
    customerInfo: {
      firstName: "John",
      lastName: "Doe",
      ssn: "***-**-1234",
      dateOfBirth: "1990-01-01",
      phoneNumber: "555-555-1234",
      email: "johndoe@example.com",
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zipCode: "12345",
      },
    },
    creditReport: {
      listOfDebts: [
        {
          creditorName: "Credit Card Company",
          accountType: "revolving account",
          accountNumber: "****1234",
          monthlyPayment: 80,
          balance: 3000,
        },
        {
          creditorName: "Credit Card Company",
          accountType: "revolving account",
          accountNumber: "****12345",
          monthlyPayment: 25,
          balance: 1000,
        },
        {
          creditorName: "Student Loan Servicer",
          accountType: "loan",
          accountNumber: "****5678",
          monthlyPayment: 400,
          balance: 20000,
        },
        {
          creditorName: "Auto Loan Servicer",
          accountType: "auto loan",
          accountNumber: "****5600",
          monthlyPayment: 500,
          balance: 10000,
        },
        {
          creditorName: "Citi credit card",
          accountType: "revolving account",
          accountNumber: "****1234",
          monthlyPayment: 25,
          balance: 200,
        },
        {
          creditorName: "CHASE credit card",
          accountType: "revolving account",
          accountNumber: "****12345",
          monthlyPayment: 25,
          balance: 0,
        },
      ],
    },
  },
};
