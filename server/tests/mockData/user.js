export const validSignUpData = [
  // Good email
  {
    email: 'ownerone@sm.com',
    password: 'passpaasa',
    UserId: '1'
  },
  // Good password
  {
    email: 'ownertwo@sm.com',
    password: 'passpassone',
    UserId: '1'
  },
  // Admin
  {
    email: 'ownerthree@sm.com',
    password: 'passpaasa',
    UserId: '1'
  },
];

export const inValidSignUpData = [
  // Undefined
  {
    password: 'passpasso',
    UserId: '1'
  },
  // Undefined password
  {
    email: 'mailone@sm.com',
    UserId: '1'
  },
  // Empty
  {
    email: '',
    password: 'something',
    UserId: '1'
  },
  // Email not string
  {
    email: ['myemail@abc.com'],
    password: 'thirtyfour',
    UserId: '1'
  },
  // Invalid email format
  {
    email: 'email.com',
    password: 'password',
    UserId: '1'
  },
  // Tooshort email
  {
    email: 'ow@sm.com',
    password: 'password',
    UserId: '1'
  },
  // Too long email
  {
    email: 'ownerattendantownergiverloremipsumdulumboss@sm.com',
    password: 'passedone',
    UserId: '1'
  },
  // Email already in use
  {
    email: 'ownertwo@sm.com',
    password: 'passedonepa',
    UserId: '1'
  },
  // Password not a string
  {
    email: 'usedonetwo@sm.com',
    password: ['mypass', 'yourpass'],
    UserId: '1'
  },
  //  Password too short
  {
    email: 'niceemail@sm.com',
    password: 'pass',
    UserId: '1'
  },
  // Too long password
  {
    email: 'laimemail@sm.com',
    password: 'passwrodpasswordpasswordyes',
    UserId: '1'
  },
  // Undefined UserId
  {
    email: 'laimemail@sm.com',
    password: 'passwrtyr'
  },
  // Empty UserId
  {
    email: 'laiemaile@sm.com',
    password: 'passwrodpa',
    UserId: ''
  },
  // NaN
  {
    email: 'laimemail@sm.com',
    password: 'passwrapper',
    UserId: '1ab'
  },
  // Not admin
  {
    email: 'owneroneke@sm.com',
    password: 'passpaasa',
    UserId: '2'
  },
  // Not in db
  {
    email: 'ownerserve@sm.com',
    password: 'passpaasa',
    UserId: '17'
  },
  // Empty password
  {
    email: 'ownerhugo@sm.com',
    password: '',
    UserId: '1'
  },
  // Password not a string
  {
    email: 'ownerserve@sm.com',
    password: 34,
    UserId: '17'
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
