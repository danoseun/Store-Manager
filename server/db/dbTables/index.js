import usersTable from './user';
import productsTable from './product';
import salesTable from './sale';
import createAdmin from './seedAdmin/insertAdmin';

usersTable()
  .then(() => createAdmin()
    .then(() => productsTable()
      .then(() => salesTable())))
  .catch(error => console.log(error));
