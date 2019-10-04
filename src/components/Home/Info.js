import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              This webpage was made using gatsby. I thought I would share some
              of my favourite beers. Unfortunately I'm not creative enough to
              come up with a compelling backstory for my fake business so you
              are stuck reading this drival. I'll probably change this to
              something that would imply this is a legitimate business with a
              fully functional shopping cart.. don't buy anything the products
              aren't real and you wont recieve a refund.{" "}
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
