import { store } from "../redux/store";
import { addPosts, PostData } from "../redux/App/actions";
export type GETPostsType = {
    max: number,
    offset?: number,
    onSucces?: Function,
    onError?: Function
}



const getAllPosts = ({max,offset,onError, onSucces}:GETPostsType) => {

    var link = 'https://5e4c2bada641ed0014b028ee.mockapi.io/posts'

    fetch(link).then(session => {
        session.json().then(json => {
            const posts : PostData[] = json
            const start = offset ? offset : 0

            let end = start + max
            
            let haveMore = end <= posts.length - 1
            if (!haveMore && end >= posts.length - 1){
                end = posts.length - 1
            }
            const result = posts.slice(start, start + max)
            store.dispatch(addPosts(result))
            onSucces ? onSucces(haveMore) : null
        })
    }).catch(err => {
        onError ? onError(err) : null
    })

}


export { getAllPosts }