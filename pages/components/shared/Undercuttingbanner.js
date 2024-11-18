import React, { useEffect, useState } from "react";
import { phoneNumber } from "@/constant/headerConstant";
import LazyImage from "../ui/LazyImage";
import Link from "next/link";

const Undercuttingbanner = () => {


  const [showUndercutting, setShowUndercutting] = useState(false);

  const closePopup = () => {
    setShowUndercutting(false);
  };

  useEffect(() => {
    setTimeout(() => {setShowUndercutting(true);}, 8000)
  }, [])

  return (
     
      <div
        className="modal fade show custompopup"
        style={{ display: showUndercutting ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content pt-0">
							<div className="modal-footer border-0">
								<button type="button " className="btn btn-secondary btnModal" onClick={closePopup} data-bs-dismiss="modal"><i className="fa fa-close " aria-hidden="true"></i></button>
							</div>
							<div className="bannerPopup pb-4 ">
								<div className="row">
									<div className="col-md-3  align-items-start callimgContainer">
					<LazyImage
                    src={"/call.png"}
                    className="card-LazyImage"
                    layout="responsive"
                    
                    />
										<div className="expert-availability">Disponible ahora</div>
									</div>
									<div className="col-md-9">
										<h4 className="mb-0 popuptext">Especial de teléfono - Llamar para reservar</h4>
										<p className="my-2  paratextPopup">Hable con un experto en viajes y obtenga asistencia 24 horas al día, 7 días a la semana  </p>
										<div className="booking-mobile">
											<h3><Link href={`tel:${phoneNumber}`}><i className="fa-solid fa-headset"></i> {phoneNumber}</Link></h3>
										</div>
									</div>
								</div>
							</div>
							<div className="bool text-center my-3">
								<h2 className="wHeding">Por qué reservar con Call Center</h2>
							</div>
							<div className="row contentCallus">
								<div className="col-xl-6 col-md-6 popupContent mb-3 align-items-center">
								<i className="fa-solid fa-headset"></i>
									<h3>Guía experta por parte nuestra <strong>expertos </strong></h3>
								</div>
								<div className="col-xl-6 col-md-6 popupContent mb-3 align-items-center">
                <i className="fa-solid fa-envelope-open-text"></i>
									<h3>Reserva inmediata <strong>confirmación</strong></h3>
								</div>
							</div>
							<div className="row contentCallus">
								<div className="col-xl-6 col-md-6 popupContent align-items-center mb-3">
                <i className="fa-solid fa-phone-slash"></i>
									<h3>24 horas <strong>cancelación</strong></h3>
								</div>
								<div className="col-xl-6 col-md-6 popupContent align-items-start mb-3">
                <i className="fa-solid fa-file-shield"></i>
									<h3>Flexible payment<strong> planes</strong></h3>
								</div>
							</div>
						</div>
        </div>
      </div>
    
  );
};

export default Undercuttingbanner;
