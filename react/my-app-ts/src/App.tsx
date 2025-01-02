import { Card}from "./Components/Card.tsx";
import {Layout} from "./Components/layout.tsx";

function App() {

  return (
     <Layout>
         aa
        <Card
            url='https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600'
            id={1}
            title="Some quick example text to build on the card title and make up the bulk of
                        the card's content"

        />
        <Card
            url='https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600'
            id={2}
            title="Some quick example text to build on the card title and make up the bulk of
                        the card's content" />
     </Layout>

  )
}

export default App
