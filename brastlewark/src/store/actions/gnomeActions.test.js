
import endPoints from '../../shared/axios/endPoints';
import axios from 'axios';


describe('gnomeActions', () => {
    it('Expect to receive array of Gnomes', () => {
        expect.assertions(1);
        return axios.get(endPoints.GET_GNOMES()).then(res => {
            expect(Array.isArray(res.data.Brastlewark)).toBe(true)
        })
    })
})

