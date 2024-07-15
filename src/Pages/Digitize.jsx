import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Digitize = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [chemin, setChemin] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [confirming, setConfirming] = useState(false);
  const [data, setData] = useState({
    region: '',
    division: '',
    subdivision: '',
    numero_acte: '',
    name: '',
    birthDate: '',
    birthPlace: '',
    sex: '',
    fatherName: '',
    fatherBirthPlace: '',
    fatherResidence: '',
    fatherOccupation: '',
    motherName: '',
    motherBirthPlace: '',
    motherBirthDate: '',
    motherResidence: '',
    motherOccupation: '',
    drawnOn: '',
    declarantName1: '',
    declarantName2: '',
    byUs1: '',
    byUs2: '',
    civilStatusRegister: '',
    inThePresenceOf: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    setLoading(true);
    setError('');
    const formData = new FormData();
    formData.append('acte', file);

    try {
      const response = await axios.post('https://projet-inf4288.onrender.com/api/digitize/extract', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Response from server:', response.data);
      setData(response.data);
      setShowForm(true);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('An error occurred while uploading the file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    setConfirming(true);

    try {
      const formDataToSend = {
        region: data.region,
        departement: data.division,
        arrondissement: data.subdivision,
        numeroActe: data.numero_acte,
        nomEnfant: data.name,
        dateNaissanceEnfant: data.birthDate,
        lieuNaissanceEnfant: data.birthPlace,
        sexe: data.sex,
        nomPere: data.fatherName,
        lieuNaissancePere: data.fatherBirthPlace,
        residencePere: data.fatherResidence,
        professionPere: data.fatherOccupation,
        nomMere: data.motherName,
        lieuNaissanceMere: data.motherBirthPlace,
        dateNaissanceMere: data.motherBirthDate,
        residenceMere: data.motherResidence,
        professionMere: data.motherOccupation,
        dresseLe: data.drawnOn,
        surLaDeclarationDe1: data.declarantName1,
        surLaDeclarationDe2: data.declarantName2,
        parNous1: data.byUs1,
        parNous2: data.byUs2,
        etatCivilCentreDe: data.civilStatusRegister,
        assisteDe: data.inThePresenceOf,
        chemin: data.chemin 
      };

      const response = await axios.post('https://projet-inf4288.onrender.com/api/digitize/', formDataToSend);

      if (response.status === 201) {
        navigate('/'); // Redirection vers la page d'accueil si la confirmation est réussie
      } else {
        setError('An error occurred. Please check your input.');
      }
    } catch (error) {
      console.error('Error confirming data:', error);
      setError('An error occurred while confirming the data. Please try again.');
    } finally {
      setConfirming(false);
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setFile(null);
    // setChemin'';
    setData({
      region: '',
      division: '',
      subdivision: '',
      numero_acte: '',
      name: '',
      birthDate: '',
      birthPlace: '',
      sex: '',
      fatherName: '',
      fatherBirthPlace: '',
      fatherResidence: '',
      fatherOccupation: '',
      motherName: '',
      motherBirthPlace: '',
      motherBirthDate: '',
      motherResidence: '',
      motherOccupation: '',
      drawnOn: '',
      declarantName1: '',
      declarantName2: '',
      byUs1: '',
      byUs2: '',
      civilStatusRegister: '',
      inThePresenceOf: ''
    });
    navigate('/digitize'); // Redirection vers la page de numérisation après annulation
  };

  return (
    <div className="main-container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            position: relative;
            width: 100%;
            height: 100%;
            display: block;
            background-color: white;
            margin: 0;
            padding: 0;
          }
          .main-container {
            width: 100%;
            padding-bottom: 1120px; /* Ajout de marge inférieure pour éviter la superposition avec le footer */
          }
          .fieldi {
            position: absolute;
            font-size: 12px;
          }
          .field {
            position: absolute;
            font-size: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .input {
            border: none;
            border-bottom: 1px solid #000;
            background-color: transparent;
            width: 700px;
          }
          .label {
            display: block;
            font-weight: bold;
          }
          .labeli {
            display: block;
            font-weight: 200;
          }
          .tyu {
            padding-top: 200px;
          }
        `}
      </style>
      {!showForm ? (
        <form onSubmit={handleSubmit} className="w-50">
          <h2 className="text-center mb-4 tyu">Digitize Birth Certificate</h2>
          <div className="mb-3">
            <label htmlFor="fileInput" className="form-label">Upload the birth certificate you want to numerate</label>
            <input 
              name='acte'
              type="file" 
              className="form-control" 
              id="fileInput" 
              accept="application/pdf" 
              onChange={handleFileChange} 
              disabled={loading}
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary w-100" disabled={loading || !file}>
            {loading ? 'Digitizing...' : 'Digitize'}
          </button>
        </form>
      ) : (
        <div className="container mt-5">
          <div className="fieldi" style={{ top: '130px', left: '20px' }}>
          <div className="label">PROVINCE <span className="labeli">PROVINCE</span></div>
          <input style={{ width: '300px' }} type="text" className="input" id="region" value={data.region} onChange={handleInputChange} />
        </div>
        <div className="fieldi" style={{ top: '195px', left: '20px' }}>
          <div className="label">DEPARTEMENT <span className="labeli">DIVISION</span></div>
          <input style={{ width: '300px' }} type="text" className="input" id="division" value={data.division} onChange={handleInputChange} />
        </div>
        <div className="fieldi" style={{ top: '260px', left: '20px' }}>
          <div className="label">ARRONDISSEMENT <span className="labeli">SUBDIVISION</span></div>
          <input style={{ width: '300px' }} type="text" className="input" id="subdivision" value={data.subdivision} onChange={handleInputChange} />
        </div>
        <div className="fieldi" style={{top: '130px', right: '20px'}}>
          <div className="label">REPUBLIQUE DU CAMEROUN</div>
          <div className="labeli">Paix - Travail - Patrie</div>
          <input style={{ width: '300px' }} type="text" className="input" value=""/>
        </div>
        <div className="fieldi" style={{top: '195px' ,right: '20px'}}>
          <div className="label">REPUBLIQUE OF CAMEROON</div>
          <div className="labeli">Peace - Work - Fatherland</div>
          <input style={{width: '300px'}} type="text" className="input" value=""/>
        </div>
        <div className="field" style={{top: '320px', left: '425px'}}>
          <div className="label">ACTE DE NAISSANCE / BIRTH CERTIFICATE</div>
        </div>
        <div className="field" style={{ top: '360px', left: '900px' }}>
          <div className="label">No</div>
          <input style={{ width: '200px' }} type="text" className="input" id="numero_acte" value={data.numero_acte} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '390px', left: '70px' }}>
          <div className="label">Nom de l'enfant: <span className="labeli">Name of the child</span></div>
          <input type="text" className="input" id="name" value={data.name} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '430px', left: '70px' }}>
          <div className="label">Le-on the:</div>
          <input type="text" style={{width: '735px'}} className="input" id="birthDate" value={data.birthDate} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '460px', left: '70px' }}>
          <div className="label">Est ne(e) a:<span className="labeli">was bornat</span></div>
          <input type="text" style={{width: '727px'}} className="input" id="birthPlace" value={data.birthPlace} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '495px', left: '70px' }}>
          <div className="label">Sexe- sex:</div>
          <input type="text" style={{width: '735px'}} className="input" id="sex" value={data.sex} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '525px', left: '70px' }}>
          <div className="label">De - of:</div>
          <input type="text" style={{width: '750px'}} className="input" id="fatherName" value={data.fatherName} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '560px', left: '70px' }}>
          <div className="label">Ne(a) a:<span className="labeli">Born at</span></div>
          <input type="text" style={{width: '748px'}} className="input" id="fatherBirthPlace" value={data.fatherBirthPlace} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '600px', left: '70px' }}>
          <div className="label">Domicilie a:<span className="labeli">residence at</span></div>
          <input type="text" style={{width: '728px'}} className="input" id="fatherResidence" value={data.fatherResidence} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '640px', left: '70px' }}>
          <div className="label">Profession:<span className="labeli">Occupation</span></div>
          <input type="text" style={{width: '730px'}} className="input" id="fatherOccupation" value={data.fatherOccupation} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '679px', left: '70px' }}>
          <div className="label">Et de - and of:</div>
          <input type="text" style={{width: '720px'}} className="input" id="motherName" value={data.motherName} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '705px', left: '70px' }}>
          <div className="label">Ne(e) a:<span className="labeli">Born at</span></div>
          <input type="text" style={{width: '755px'}} className="input" id="motherBirthPlace" value={data.motherBirthPlace} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '740px', left: '70px' }}>
          <div className="label">Le-on the:</div>
          <input type="text" style={{width: '740px'}} className="input" id="motherBirthDate" value={data.motherBirthDate} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '775px', left: '70px' }}>
          <div className="label">Domicilie a:<span className="labeli">Residence at</span></div>
          <input type="text" style={{width: '728px'}} className="input" id="motherResidence" value={data.motherResidence} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '810px', left: '70px' }}>
          <div className="label">Profession:<span className="labeli">Occupation</span></div>
          <input type="text" style={{width: '734px'}} className="input" id="motherOccupation" value={data.motherOccupation} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '845px', left: '70px' }}>
          <div className="label">Dresse le:<span className="labeli">Drawn on</span></div>
          <input type="text" style={{width: '745px'}} className="input" id="drawnOn" value={data.drawnOn} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '880px', left: '70px' }}>
          <div className="label">Sur la declaration de:<span className="labeli">on the declaration of</span></div>
          <input type="text" style={{width: '680px'}} className="input" id="declarantName1" value={data.declarantName1} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '915px', left: '70px' }}>
          <div className="label"><span className="labeli"></span></div>
          <input type="text" style={{width: '803px'}} className="input" id="declarantName2" value={data.declarantName2} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '950px', left: '70px' }}>
          <div className="label">Par nous:<span className="labeli">by us</span></div>
          <input type="text" style={{width: '747px'}}className="input" id="byUs1" value={data.byUs1} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '985px', left: '70px' }}>
          <div className="label"><span className="labeli"></span></div>
          <input type="text" style={{width: '804px'}} className="input" id="byUs2" value={data.byUs2} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '1019px', left: '70px' }}>
          <div className="label">Centre d'etat civil de:<span className="labeli">civil status register of</span></div>
          <input type="text" style={{width: '682px'}} className="input" id="civilStatusRegister" value={data.civilStatusRegister} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '1050px', left: '70px' }}>
          <div className="label">Assiste de:<span className="labeli">in the presence of</span></div>
          <input type="text" style={{width: '710px'}} className="input" id="inThePresenceOf" value={data.inThePresenceOf} onChange={handleInputChange} />
        </div>
        <div className="field" style={{ top: '1050px', left: '70px' }}>
          <input type="hidden" className="input" id="chemin" value={data.chemin}/>
        </div>
          <button onClick={handleConfirm} style={{ position: 'absolute', top: '1100px', left: '90px' }} className="btn btn-success mt-3" disabled={confirming}>
            {confirming ? 'Confirming...' : 'Confirmer'}
          </button>
          <button onClick={handleCancel} style={{ position: 'absolute', top: '1100px', left: '600px' }} className="btn btn-danger mt-3" disabled={confirming}>
            Annuler
          </button>
        </div>
      )}
    </div>
  );
};

export default Digitize;
