import React from 'react';
import renderer from 'react-test-renderer';
import UserHeader from '../UserHeader'

const date = "2020-02-18T06:33:57.162Z"
const user = {
    "id": "1",
    "postId": "1",
    "last_seen": "2020-02-18T06:33:57.162Z",
    "name": "Charles Hickle",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bruno_mart/128.jpg",
    "followers": 10,
    "followings": 53,
    "description": "Extended logistical array",
    "posts": [
        {
            "id": "1",
            "createdAt": "2020-02-18T04:40:49.601Z",
            "title": "Principal Identity Associate",
            "image": "https://images.unsplash.com/photo-1582043725042-f3d1873eeadf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "likes": 68,
            "comments": 43
        }
    ]
}

describe('UserHeader', () => {
    describe('Rendering', () => {
        it('draw all the header data with date', () => {

            const component = renderer.create(<UserHeader user={user} date={date}/>).toJSON()
            expect(component).toMatchSnapshot()
        });
        it('draw all the header data without date', () => {

            const component = renderer.create(<UserHeader user={user}/>).toJSON()
            expect(component).toMatchSnapshot()
        });

        it('draw an empty header', () => {
            const component = renderer.create(<UserHeader />).toJSON()
            expect(component).toMatchSnapshot()
        });
    });

})
