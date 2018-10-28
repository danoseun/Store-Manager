export const queryUsersByEmail = 'SELECT * FROM users where email = $1';
export const createUser = 'INSERT INTO users (email, password) values ($1, $2) returning *';
export const deleteUser = 'DELETE FROM users WHERE id = $1';
