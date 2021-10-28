import { assert }   from 'chai';
import { uuid }     from '../src/lib/uuid4';
import { validate } from 'uuid';

describe('UUID v4 Syntax Validation', function(){
    it('Checking', function(){
        assert(validate(uuid));
    });
});
