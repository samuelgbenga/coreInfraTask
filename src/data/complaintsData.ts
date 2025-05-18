export interface Complaint {
  id: string;
  account: string;
  name: string;
  date: string;
  category: string;
  details: string;
  branch: string;
  submissionDate: string;
  status: string;
  resolvedBy: string;
  attachment: string;
  resolutionDate: string;
}

export const complaints: Complaint[] = [
  {
    id: "CMP001",
    account: "2034567890",
    name: "Nazeer Ajibola",
    date: "11/14/2024 10:27:43",
    category: "Card Dispute",
    details: "Customer reported unauthorized card transaction",
    branch: "Head Office",
    submissionDate: "11/14/2024 10:27:43",
    status: "Resolved",
    resolvedBy: "Manager",
    attachment: "None",
    resolutionDate: "11/14/2024 10:27:43"
  },
  {
    id: "CMP002",
    account: "3123456789",
    name: "Aisha Bello",
    date: "11/14/2024 10:30:12",
    category: "Fraud",
    details: "Suspicious account activity detected",
    branch: "Head Office",
    submissionDate: "11/14/2024 10:30:12",
    status: "Pending",
    resolvedBy: "",
    attachment: "None",
    resolutionDate: ""
  },
  {
    id: "CMP003",
    account: "4234567812",
    name: "Chinedu Okafor",
    date: "11/14/2024 10:35:21",
    category: "Unauthorized Transaction",
    details: "Multiple unauthorized withdrawals reported",
    branch: "Head Office",
    submissionDate: "11/14/2024 10:35:21",
    status: "Resolved",
    resolvedBy: "Manager",
    attachment: "None",
    resolutionDate: "11/14/2024 10:35:21"
  },
  {
    id: "CMP004",
    account: "5345678921",
    name: "Fatima Yusuf",
    date: "11/14/2024 10:40:05",
    category: "Other",
    details: "General account inquiry",
    branch: "Head Office",
    submissionDate: "11/14/2024 10:40:05",
    status: "Pending",
    resolvedBy: "",
    attachment: "None",
    resolutionDate: ""
  },
  {
    id: "CMP005",
    account: "2456789012",
    name: "Emeka Obi",
    date: "11/14/2024 10:45:33",
    category: "Card Dispute",
    details: "Card declined at POS",
    branch: "Head Office",
    submissionDate: "11/14/2024 10:45:33",
    status: "Resolved",
    resolvedBy: "Manager",
    attachment: "None",
    resolutionDate: "11/14/2024 10:45:33"
  },
  {
    id: "CMP006",
    account: "3567890123",
    name: "Grace Johnson",
    date: "11/14/2024 10:50:44",
    category: "Fraud",
    details: "Suspicious online transaction",
    branch: "Head Office",
    submissionDate: "11/14/2024 10:50:44",
    status: "Pending",
    resolvedBy: "",
    attachment: "None",
    resolutionDate: ""
  },
  {
    id: "CMP007",
    account: "4678901234",
    name: "Ibrahim Musa",
    date: "11/14/2024 10:55:12",
    category: "Unauthorized Transaction",
    details: "ATM withdrawal dispute",
    branch: "Head Office",
    submissionDate: "11/14/2024 10:55:12",
    status: "Resolved",
    resolvedBy: "Manager",
    attachment: "None",
    resolutionDate: "11/14/2024 10:55:12"
  },
  {
    id: "CMP008",
    account: "5789012345",
    name: "Ngozi Eze",
    date: "11/14/2024 11:00:01",
    category: "Other",
    details: "Account statement request",
    branch: "Head Office",
    submissionDate: "11/14/2024 11:00:01",
    status: "Pending",
    resolvedBy: "",
    attachment: "None",
    resolutionDate: ""
  },
  {
    id: "CMP009",
    account: "6890123456",
    name: "Samuel Uche",
    date: "11/14/2024 11:05:27",
    category: "Card Dispute",
    details: "Card PIN reset request",
    branch: "Head Office",
    submissionDate: "11/14/2024 11:05:27",
    status: "Resolved",
    resolvedBy: "Manager",
    attachment: "None",
    resolutionDate: "11/14/2024 11:05:27"
  },
  {
    id: "CMP010",
    account: "7901234567",
    name: "Blessing Ade",
    date: "11/14/2024 11:10:19",
    category: "Fraud",
    details: "Mobile banking fraud report",
    branch: "Head Office",
    submissionDate: "11/14/2024 11:10:19",
    status: "Pending",
    resolvedBy: "",
    attachment: "None",
    resolutionDate: ""
  },
  {
    id: "CMP011",
    account: "8012345678",
    name: "Tunde Bakare",
    date: "11/14/2024 11:15:33",
    category: "Unauthorized Transaction",
    details: "International transaction dispute",
    branch: "Head Office",
    submissionDate: "11/14/2024 11:15:33",
    status: "Resolved",
    resolvedBy: "Manager",
    attachment: "None",
    resolutionDate: "11/14/2024 11:15:33"
  },
  {
    id: "CMP012",
    account: "9123456780",
    name: "Maryam Sani",
    date: "11/14/2024 11:20:45",
    category: "Other",
    details: "Account closure request",
    branch: "Head Office",
    submissionDate: "11/14/2024 11:20:45",
    status: "Pending",
    resolvedBy: "",
    attachment: "None",
    resolutionDate: ""
  },
  {
    id: "CMP013",
    account: "1234567891",
    name: "Peter Okon",
    date: "11/14/2024 11:25:58",
    category: "Card Dispute",
    details: "Card replacement request",
    branch: "Head Office",
    submissionDate: "11/14/2024 11:25:58",
    status: "Resolved",
    resolvedBy: "Manager",
    attachment: "None",
    resolutionDate: "11/14/2024 11:25:58"
  },
  {
    id: "CMP014",
    account: "2345678902",
    name: "Ruth Agbo",
    date: "11/14/2024 11:30:12",
    category: "Fraud",
    details: "Online banking fraud alert",
    branch: "Head Office",
    submissionDate: "11/14/2024 11:30:12",
    status: "Pending",
    resolvedBy: "",
    attachment: "None",
    resolutionDate: ""
  },
  {
    id: "CMP015",
    account: "3456789013",
    name: "Yusuf Lawal",
    date: "11/14/2024 11:35:27",
    category: "Unauthorized Transaction",
    details: "POS transaction dispute",
    branch: "Head Office",
    submissionDate: "11/14/2024 11:35:27",
    status: "Resolved",
    resolvedBy: "Manager",
    attachment: "None",
    resolutionDate: "11/14/2024 11:35:27"
  }
];