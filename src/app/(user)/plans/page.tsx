const events = [
  {
    id: 1,
    title: '',
    description: '',
    assets: [],
    date: ''
  }
]
const feedback = [
  {
    id: 1,
    customerId: 1,
    content: ''
  }
]
const assets = [
  {
    type: 'image',
    src: '/'
  }
]
const reviews = [
  {
    id: 1,
    customerId: 1,
    content: 1
  }
]
const dimension = {
  heigh: 100,
  width: 100,
  unit: 'px',
  label: 'Facebook Poster'
}
const plans = [
  {
    id: 1,
    title: '',
    description: '',
    tags: '',
    price: '',
    discount: '',
    type: 'EVENT_BASED' || 'DURATION_BASED',
    events: events[0],
    duration: 1,
    numberOfDesigns: 2,
    dimension: dimension,
    feedback: feedback[0],
    reviews: reviews[0],
    assets: assets[0],
    features: [],
    format: [],
    isActive: true
  }
]

const PlansPage = () => {
  return <div>PlansPage</div>
}
export default PlansPage
