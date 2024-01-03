import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, SuperQuality
} from './sections';
import Nav from './components/Nav';

const App = () => (
  <main className = "relative">
    <Nav />
    <section className = "xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className = "padding">
      <PopularProducts />
    </section>
    <section className = "padding">
      <SuperQuality />
    </section>
    <section className = "padding-x padding-y-10">
      <Services />
    </section>
    <section className = "padding">
      <SpecialOffer/>
    </section>
    <section className = "bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className = "bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
)

export default App;