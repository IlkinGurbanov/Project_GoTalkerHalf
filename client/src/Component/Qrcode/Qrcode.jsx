import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const Qrcode = () => {
  const[url, setUrl] = useState("");

  const downloadQRCode = (e) => {
    e.preventDefault();
    setUrl("");
  };

  const qrCodeEncoder = (e) => {
    setUrl(e.target.value);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={url}
      size={300}
      bgColor={"#fff"}
      level={"H"}
    />
  );
  return (
    <div className="qrcode__container">
      <div>{qrcode}</div>
      <div className="input__group">
        <form onSubmit={downloadQRCode}>
          <input
            type="text"
            value={url}
            onChange={qrCodeEncoder}
            placeholder="Enter text"
          />
          <button type="submit" disabled={!url}>
            Download QR code
          </button>
        </form>
      </div>
    </div>
  );
};

export default Qrcode;