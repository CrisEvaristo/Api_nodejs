
import * as create from './Create';
import * as getAll from './GelAll';
import * as getById from './GetById';
import * as updateById from'./UpdateById';
import * as deleteById from './DeleteById';

export const CidadeController={
 ...create,
 ...getAll,
 ...getById,
 ...updateById,
...deleteById,
};