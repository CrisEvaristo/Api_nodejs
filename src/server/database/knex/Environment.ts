
import {Knex} from 'knex';
import path from 'path';

export const development:Knex.Config={
  client:'sqlite5',
  useNullAsDefault:true,
  connection:{
    filename: path.resolve(__dirname,'..','..','..','..','database.sqlite')
  },
  migrations:{
    directory:path.resolve(__dirname,'..','migrations')
  },
  seeds:{
    directory:path.resolve(__dirname,'..','seeds')
  },
  pool:{
    afterCreate:(connection:any,done:Function)=>{
      connection.run('PRAGMA foreign_key=ON');
      done();
    }
  }
};

export const test={};

