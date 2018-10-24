export const validSignUpData = [
  // Good email
  {
    email: 'ownerone@sm.com',
    password: 'passpaasa',
    userId: '1'
  },
  // Good password
  {
    email: 'ownertwo@sm.com',
    password: 'passpassone',
    userId: '1'
  },
  // Admin
  {
    email: 'ownerthree@sm.com',
    password: 'passpaasa',
    userId: '1'
  },
];

export const inValidSignUpData = [
  // Undefined
  {
    password: 'passpasso',
    userId: '1'
  },
  // Undefined password
  {
    email: 'mailone@sm.com',
    userId: '1'
  },
  // Empty
  {
    email: '',
    password: 'something',
    userId: '1'
  },
  // Email not string
  {
    email: ['myemail@abc.com'],
    password: 'thirtyfour',
    userId: '1'
  },
  // Invalid email format
  {
    email: 'email.com',
    password: 'password',
    userId: '1'
  },
  // Tooshort email
  {
    email: 'ow@sm.com',
    password: 'password',
    userId: '1'
  },
  // Too long email
  {
    email: 'ownerattendantownergiverloremipsumdulumboss@sm.com',
    password: 'passedone',
    userId: '1'
  },
  // Email already in use
  {
    email: 'ownertwo@sm.com',
    password: 'passedonepa',
    userId: '1'
  },
  // Password not a string
  {
    email: 'usedonetwo@sm.com',
    password: ['mypass', 'yourpass'],
    userId: '1'
  },
  //  Password too short
  {
    email: 'niceemail@sm.com',
    password: 'pass',
    userId: '1'
  },
  // Too long password
  {
    email: 'laimemail@sm.com',
    password: 'passwrodpasswordpasswordyes',
    userId: '1'
  },
  // Undefined userId
  {
    email: 'laimemail@sm.com',
    password: 'passwrtyr'
  },
  // Empty userId
  {
    email: 'laiemaile@sm.com',
    password: 'passwrodpa',
    userId: ''
  },
  // NaN
  {
    email: 'laimemail@sm.com',
    password: 'passwrapper',
    userId: '1ab'
  },
  // Not admin
  {
    email: 'owneroneke@sm.com',
    password: 'passpaasa',
    userId: '2'
  },
  // Not in db
  {
    email: 'ownerserve@sm.com',
    password: 'passpaasa',
    userId: '17'
  },
  // Empty password
  {
    email: 'ownerhugo@sm.com',
    password: '',
    userId: '1'
  },
  // Password not a string
  {
    email: 'ownerserve@sm.com',
    password: 34,
    userId: '17'
  },
];

export const inValidSignInData = [
  // Undefined email
  {
    password: 'passwrodtru',
  },
  // Empty email
  {
    email: '',
    password: 'passwrodpa',
  },
  // Email not a string
  {
    email: [],
    password: 'passwrodpa',
  },
  // Email not in database
  {
    email: 'databsert@sm.com',
    password: 'passwordone',
  },
  // Password undefined
  {
    email: 'ownerone@sm.com',
  },
  // Password empty
  {
    email: 'ownerone@sm.com',
    password: '',
  },
  // Email does not tally with password
  {
    email: 'ownerone@sm.com',
    password: 'passpaaze'
  }
];

export const validSignInData = [
  {
    email: 'ownerone@sm.com',
    password: 'passpaasa'
  }
];
