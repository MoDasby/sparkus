import Navbar from "../../components/Navbar";
import {Feed} from "../../components/Feed";
import {PostProps} from "../../components/PostCard";
import './style.css'
import {NewUsersCard, UserProps} from "../../components/NewUsersCard";

const Home = () => {
    const mock: PostProps[] = [{
        post_author: null,
        text: "só testando auyi",
        likes: 28,
        comments: [{
            post_author: "dddddd",
                text: "muito bom esse teste ai em",
                likes: 12,
                author_username: "partigiano13",
                author_name: "edson roba brisa",
                author_icon_path: "https://s2.glbimg.com/bEn7rw3T_6w7zue426runnkaIL4=/0x0:1300x867/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/8/N/lG0onERkiwxcA4XvHZFQ/kombimuseu.jpg",
                comments: [{
                    text: "muito bom esse teste ai em",
                    likes: 12,
                    author_username: "partigiano13",
                    author_name: "edson roba brisa",
                    author_icon_path: "https://s2.glbimg.com/bEn7rw3T_6w7zue426runnkaIL4=/0x0:1300x867/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/8/N/lG0onERkiwxcA4XvHZFQ/kombimuseu.jpg",
                    comments: [],
                    post_author: "modasby"
            }]
        }],
        author_username: "modasby",
        author_name: "jose de loures",
        author_icon_path: "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/162179-tv-news-feature-rick-and-morty-season-6-release-date-trailer-and-how-to-watch-image1-kbmgzwpsy5.jpg"

    },
        {
            author_name: "marcos pereirinha",
            post_author: null,
            author_username: "pereirinhaaa",
            author_icon_path: "https://www.folhavitoria.com.br/entretenimento/blogs/du-ponto-de-vista-masculino/wp-content/uploads/2015/11/careca-800x500.jpg",
            text: "ih rapaz aqui digo eu que estou postando esse post",
            likes: 4508,
            comments: [
                {
                    author_name: "kylia",
                    post_author: "pereirinhaaa",
                    author_username: "kkkkkkilye",
                    author_icon_path: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4391552e15799700/6277ab4a0dc666597b5eb70c/mbappe.jpg?auto=webp&format=jpg&quality=100",
                    text: "ih rapaz aqui digo eu que estou respondendo ah esse post",
                    likes: 58,
                    comments: []
                }
            ]
        },
        {
            author_name: "marcos pereirinha",
            post_author: null,
            author_username: "pereirinhaaa",
            author_icon_path: "https://www.folhavitoria.com.br/entretenimento/blogs/du-ponto-de-vista-masculino/wp-content/uploads/2015/11/careca-800x500.jpg",
            text: "ih rapaz aqui digo eu que estou postando esse post",
            likes: 4508,
            comments: []
        },
        {
            author_name: "marcos pereirinha",
            post_author: null,
            author_username: "pereirinhaaa",
            author_icon_path: "https://www.folhavitoria.com.br/entretenimento/blogs/du-ponto-de-vista-masculino/wp-content/uploads/2015/11/careca-800x500.jpg",
            text: "ih rapaz aqui digo eu que estou postando esse post",
            likes: 4508,
            comments: []
        },
    ]

    const mockToNewUsers: UserProps[] = [
        {
            name: "Roberto",
            username: "robereeet",
            icon_path: "https://media.gazetadopovo.com.br/viver-bem/2017/02/selfie-perfeita-5518fdd0.jpg"
        },
        {
            name: "Marcela",
            username: "marceeela",
            icon_path: "https://veja.abril.com.br/wp-content/uploads/2018/03/selfie0mulher-20150128-0007.jpg"
        }
    ]

    return (
        <>
            <Navbar />

            <div className="wrapper">
                <div>
                    <NewUsersCard users={mockToNewUsers} />
                </div>

                <div>
                    <Feed props={mock} />
                </div>
            </div>
        </>
    )
}

export default Home;