import React from "react";
import Head from "next/head";
import Breadcrumb from "./components/shared/Breadcrumb";
import LazyImage from "./components/ui/LazyImage";
import { phoneNumber } from "@/constant/headerConstant";

const About = () => {
  return (
    <>
      <Head>
        <title>{"Payment"}</title>
      </Head>
      <Breadcrumb title={"Payment"} />

       
 

      <div className="container-xl inner-page mt-5 mb-5">
        <div className="col-12 ">
         <form>
          <label>Card Number</label>
          <input type="text" placeholder="Card Number" className="form-control" /> 

          <div className="row mt-4">
          <label> Expiration Date</label>
          <div className="col-6"><input type="text" placeholder="01" className="form-control" /> </div>
          <div className="col-6"><input type="text" placeholder="2024" className="form-control" /> </div>
          </div>

          <div className="row mt-4">
          <div className="col-4">
          <label> CCV Number</label>
          <input type="text" placeholder="card cvv" className="form-control" /></div>

          <div className="col-4">
          <label> Amount</label>
          <input type="text" placeholder="Amount" className="form-control" /> </div>

          <div className="col-4">
          <label> Currency</label>
          <input type="text" placeholder="USD" className="form-control" /> </div>

          </div>

          <h3 className="mt-5 mb-4">Order Information</h3>
          <label>Description</label>
          <input type="text" placeholder="Description" className="form-control" /> 
         

          <h3 className="mt-5 mb-4">Customer Billing Information</h3>
        
          <div className="col-12 mt-4">
          <label>Card Holder Name</label>
          <input type="text" placeholder="Full Name" className="form-control" /></div>

          <div className="col-12 mt-4">
          <label> Address</label>
          <input type="text" placeholder="Address" className="form-control" /> </div>

          <div className="col-12 mt-4">
          <label> City</label>
          <input type="text" placeholder="City" className="form-control" /> </div>

          <div className="col-12 mt-4">
          <label> State/Province</label>
          <input type="text" placeholder="State/Province" className="form-control" /> </div>

          <div className="col-12 mt-4">
          <label> Zip Code</label>
          <input type="text" placeholder="Zip Code" className="form-control" /> </div>

          <div className="col-12 mt-4">
          <label> Country</label>
          <input type="text" placeholder="Country" className="form-control" /> </div>

          <div className="col-12 mt-4">
          <label> Phone Number</label>
          <input type="text" placeholder="Phone" className="form-control" /> </div>

       <button className="btn btn-success mt-4">Confirm Payment</button>
           

         </form>
        </div>
      </div>
    </>
  );
};

export default About;
