// Dummy data for the Lost & Found platform

export const categories = [
  'Electronics',
  'Clothing',
  'Accessories',
  'Books',
  'Keys',
  'Bags',
  'Documents',
  'Jewelry',
  'Sports Equipment',
  'Other'
];

export const dummyItems = [
  {
    id: '1',
    type: 'lost',
    title: 'iPhone 13 Pro',
    description: 'Lost my iPhone 13 Pro in blue color. Last seen at Central Park near the fountain area. Has a clear case with family photo.',
    category: 'Electronics',
    location: 'Central Park, NYC',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    contactEmail: 'john.doe@email.com',
    userId: 'user1',
    userName: 'John Doe'
  },
  {
    id: '2',
    type: 'found',
    title: 'Brown Leather Wallet',
    description: 'Found a brown leather wallet with some cash and credit cards. Found near Times Square subway station.',
    category: 'Accessories',
    location: 'Times Square, NYC',
    date: '2024-01-14',
    image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=400',
    contactEmail: 'sarah.smith@email.com',
    userId: 'user2',
    userName: 'Sarah Smith'
  },
  {
    id: '3',
    type: 'lost',
    title: 'Red Backpack',
    description: 'Lost my red hiking backpack with laptop inside. Contains important work documents and personal items.',
    category: 'Bags',
    location: 'Brooklyn Bridge',
    date: '2024-01-13',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400',
    contactEmail: 'mike.johnson@email.com',
    userId: 'user3',
    userName: 'Mike Johnson'
  },
  {
    id: '4',
    type: 'found',
    title: 'Set of House Keys',
    description: 'Found a set of house keys with a blue keychain near the coffee shop on 5th Avenue.',
    category: 'Keys',
    location: '5th Avenue, NYC',
    date: '2024-01-12',
    image: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=400',
    contactEmail: 'emma.wilson@email.com',
    userId: 'user4',
    userName: 'Emma Wilson'
  },
  {
    id: '5',
    type: 'lost',
    title: 'Gold Wedding Ring',
    description: 'Lost my gold wedding ring with diamond. Sentimental value. Reward offered.',
    category: 'Jewelry',
    location: 'Washington Square Park',
    date: '2024-01-11',
    image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=400',
    contactEmail: 'david.brown@email.com',
    userId: 'user5',
    userName: 'David Brown'
  },
  {
    id: '6',
    type: 'found',
    title: 'Black Umbrella',
    description: 'Found a black umbrella left at the bus stop. Still in good condition.',
    category: 'Other',
    location: 'Madison Avenue Bus Stop',
    date: '2024-01-10',
    image: 'https://images.pexels.com/photos/1114681/pexels-photo-1114681.jpeg?auto=compress&cs=tinysrgb&w=400',
    contactEmail: 'lisa.davis@email.com',
    userId: 'user6',
    userName: 'Lisa Davis'
  }
];

export const currentUser = {
  id: 'user1',
  name: 'John Doe',
  email: 'john.doe@email.com',
  joinDate: '2023-12-01'
};