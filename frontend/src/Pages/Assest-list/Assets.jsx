import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Assets.css'; // Import the CSS file

const Assets = () => {
  const [assets, setAssets] = useState([]);

  const getAssetDetails = async () => {
    try {
      const res = await axios.get('http://localhost:3000/v1/getUsers');
      setAssets(res.data);
    } catch (error) {
      console.error('Error fetching asset data:', error);
    }
  };

  useEffect(() => {
    getAssetDetails();
  }, []);

  return (
    <div className="container">
      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">Asset Management</h1>
        <table className="asset-table">
          <thead>
            <tr>
              <th>Performance Key</th>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(assets) && assets.length > 0 ? (
              assets.map((asset, index) => (
                <tr key={index}>
                  <td>{asset.PERFORMANCE_KEY}</td>
                  <td>{asset.EMPLOYEE_ID}</td>
                  <td>{asset.NAME}</td>
                  <td>{asset.DESIGNATION}</td>
                  <td>{asset.DEPARTMENT}</td>
                  <td className="view">View</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-data">No asset records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assets;
