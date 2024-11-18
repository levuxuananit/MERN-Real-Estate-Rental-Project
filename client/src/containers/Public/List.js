import React, { useEffect } from 'react'
import { Button, Item } from '../../components'
import { getPosts, getPostsLimit } from '../../store/actions/post'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'


const List = ({ categoryCode }) => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const { posts } = useSelector(state => state.post)
    console.log(posts)
    useEffect(() => {
        let params = []
        for (let entry of searchParams.entries()) {
            params.push(entry);
        }
        let searchParamsObject = {}
        params?.forEach(i => {
            if (Object.keys(searchParamsObject)?.some(item => item === i[0])) {
                searchParamsObject[i[0]] = [...searchParamsObject[i[0]], i[1]]
            } else {
                searchParamsObject = { ...searchParamsObject, [i[0]]: [i[1]] }
            }
        })
        if (categoryCode) searchParamsObject.categoryCode = categoryCode
        dispatch(getPostsLimit(searchParamsObject))
        console.log(posts)
    }, [searchParams, categoryCode])
    return (
        <div className='w-full p-2 bg-white shadow-md rounded-md px-6'>
            <div className='flex items-center justify-between my-3'>
                <h4 className='text-xl font-semibold'>Danh sách tin đăng</h4>
                <span>Cập nhật: 12:05 25/08/2022</span>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <span>Sắp xếp:</span>
                <Button bgColor='bg-gray-200' text='Mặc định' />
                <Button bgColor='bg-gray-200' text='Mới nhất' />
            </div>
            <div className='items'>
                {posts?.length > 0 && posts.map(item => {
                    return (
                        <Item
                            key={item?.id}
                            address={item?.address}
                            attributes={item?.attributes}
                            description={JSON.parse(item?.description)}
                            images={["https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/459006590_2340784726260886_3808501892857031952_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFkmw3W5KAWcxJxMOctI6B0sPSZhPx6VNyw9JmE_HpU3HkTtQXTqrSq-mMrnWrutkySMEvQc5Y5u2VgoPj__286&_nc_ohc=zlU954dijikQ7kNvgFcnB85&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=Al3pRkIX_c5LN8wxWiDcmRo&oh=00_AYBiuSZHAliOFRuhgrTomlZQIck_lWBpjbl3q5rL6Nrv3w&oe=674013C1"]}
                            star={+item?.star}
                            title={item?.title}
                            user={item?.userId}
                            id={item?.id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default List