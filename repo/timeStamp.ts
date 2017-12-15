import knex from './config';

function getTimeStamps() {
    return knex('time_stamp').select('*');
}

export {
    getTimeStamps
}