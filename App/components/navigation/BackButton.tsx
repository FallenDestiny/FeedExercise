import React, { PureComponent } from 'react'
import { Image } from 'react-native'
import images from '../../assets/images'
const BackButton = (props: {
    tintColor?: string;
    title?: string | null;
}) => {
        return (
            <Image style={{width:28, height:28, marginLeft:14,resizeMode:'contain'}} source={images.chevron_left}/>
        )
}


export default BackButton