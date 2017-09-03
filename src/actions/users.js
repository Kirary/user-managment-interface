/**
 * Created by Kirary on 02.09.2017.
 */

export const getUserList = (offset, limit) =>{
    return axios.get('https://livedemo.xsolla.com/fe/test-task/baev/users', {
        params: {
            offset: offset,
            limit: limit
        }
    })
};