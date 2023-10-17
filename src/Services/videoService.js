import * as httpRequest from '~/utils/httpRequest';

export const getVideoHomePage = async ({ type = 'for-you', page }) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
