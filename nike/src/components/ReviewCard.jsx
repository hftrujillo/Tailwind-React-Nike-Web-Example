import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className = "flex justify-center items-center flex-col">
        <img src = {imgURL} alt = "customer" className = "rounded-full object-cover w-[120px] h-[120px]"/>
        <p className = "mt-6 max-w-sum text-center info-text">{feedback}</p>
        <div>
            <img src = {star} width = {24} height = {24} className = "object-contain m-2"/>
        </div>
        <p>({rating})</p>
        <h3 className = "mt-3 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard