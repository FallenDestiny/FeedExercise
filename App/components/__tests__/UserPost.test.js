import React from 'react';
import renderer from 'react-test-renderer';
import UserPost from '../UserPost'

const post =
{
    "id": "1",
    "createdAt": "2020-02-18T04:40:49.601Z",
    "title": "Principal Identity Associate",
    "image": "https://images.unsplash.com/photo-1582043725042-f3d1873eeadf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "likes": 68,
    "comments": 43
}


describe('UserHeader', () => {
    describe('Rendering', () => {
        it('draw all the user post with data', () => {

            const component = renderer.create(<UserPost post={post}/>).toJSON()
            expect(component).toMatchSnapshot()
        });


        it('draw all the user post with image only', () => {

            const component = renderer.create(<UserPost post={{image:post.image}}/>).toJSON()
            expect(component).toMatchSnapshot()
        });

        it('draw all the user post with description and createDate', () => {

            const component = renderer.create(<UserPost post={{description: post.description, createdAt:post.createdAt}}/>).toJSON()
            expect(component).toMatchSnapshot()
        });

        it('draw an empty header', () => {
            const component = renderer.create(<UserPost />).toJSON()
            expect(component).toMatchSnapshot()
        });
    });

})
