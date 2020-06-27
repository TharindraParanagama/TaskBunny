import React, { useEffect } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default function Footer() {
  return (
    <div>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3 purps">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: Some Bunny Once Told Me
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}
