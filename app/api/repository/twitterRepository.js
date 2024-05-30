import { PROVIDER_DELETE, PROVIDER_GET, PROVIDER_POST, PROVIDER_PUT } from "../provider"
import { getCookie} from '@/app/utils/helper';

const delay = () => new Promise(res => setTimeout(() => res(), 800))

export const twitterConnect = async ( data) => {
    await delay()
    const token = getCookie('token');
    const response = await PROVIDER_POST(`api/v1/auth/twitter`,data , token)
    return response
}


export const twitterPost = async () => {
    await delay()
    const token = getCookie('token')
    const response = await PROVIDER_POST(`api/v1/post/tweet`,data , token)
    return response
}