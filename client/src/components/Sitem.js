import React, { memo } from 'react'
import moment from 'moment'
import 'moment/locale/vi'

const Sitem = ({ title, price, image, createdAt }) => {

    const formatTime = (createdAt) => {
        return moment(createdAt).fromNow()
    }

    return (
        <div className='w-full flex items-center gap-2 py-2 border-b border-gray-300'>
            <img
                src={"https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/459006590_2340784726260886_3808501892857031952_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFkmw3W5KAWcxJxMOctI6B0sPSZhPx6VNyw9JmE_HpU3HkTtQXTqrSq-mMrnWrutkySMEvQc5Y5u2VgoPj__286&_nc_ohc=zlU954dijikQ7kNvgFcnB85&_nc_zt=23&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=Al3pRkIX_c5LN8wxWiDcmRo&oh=00_AYBiuSZHAliOFRuhgrTomlZQIck_lWBpjbl3q5rL6Nrv3w&oe=674013C1"}
                alt="anh"
                className='w-[65px] h-[65px] object-cover flex-none rounded-md'
            />
            <div className='w-full flex-auto flex flex-col justify-between gap-1'>
                <h4 className='text-blue-600 text-[14px]'>{`${title?.slice(0, 45)}...`}</h4>
                <div className=' flex items-center justify-between w-full'>
                    <span className='text-sm font-medium text-green-500'>{price}</span>
                    <span className='text-sm text-gray-300'>{formatTime(createdAt)}</span>
                </div>
            </div>
        </div>
    )
}

export default memo(Sitem)