import { getCreator } from '@/apis/creator'

export const useHome = async () => {
    const creator = await getCreator()

    return { creator }
}
