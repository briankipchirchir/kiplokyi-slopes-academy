import React from 'react';
import '../styles/FeeStructure.css';

export default function FeeStructure() {
  const feeData = [
    { grade: 'Play group', term1: '9,000', term2: '9,000', term3: '8,000' },
    { grade: 'PP1', term1: '9,500', term2: '9,500', term3: '9,000' },
    { grade: 'PP2', term1: '10,000', term2: '10,000', term3: '9,500' },
    { grade: 'Grade 1', term1: '10,500', term2: '10,500', term3: '10,000' },
    { grade: 'Grade 2', term1: '10,500', term2: '10,500', term3: '10,000' },
    { grade: 'Grade 3', term1: '11,000', term2: '11,000', term3: '10,000' },
    { grade: 'Grade 4', term1: '11,000', term2: '11,000', term3: '11,000' },
    { grade: 'Grade 5', term1: '11,000', term2: '11,000', term3: '11,000' },
    { grade: 'Grade 6', term1: '12,500', term2: '12,500', term3: '12,000' },
  ];

  return (
    <div className="fee-structure-page">
      {/* Hero Section with Logo */}
      <section className="fee-hero">
        <div className="fee-hero-content">
          <div className="fee-logo-container">
            <img 
              src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/487513352_122191207670094208_5466276275303908927_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeECKrnRepoR9XpxoB3CWnNQKC7FqIbyRv0oLsWohvJG_V_XFzhU001aAr_LNWd23_MkMtg0pQgpWlIYOq2wgJXr&_nc_ohc=xXZPs5mrKeQQ7kNvwFov9Hu&_nc_oc=Adl1mXc5XrZfbvrM0DNyO_cidaEubJwiccKAqWWdYEaQ076clEULDn_-qwCTJwAsSow&_nc_zt=23&_nc_ht=scontent.fnbo1-1.fna&_nc_gid=gnmA5ZTRWmAmidGoiXwdWg&oh=00_AfuYRWNg8-78BCHeg8Lha2e1dazDqQFJGsvDNCghuLgICg&oe=6987CA24" 
              alt="Kiplokyi Slopes Academy" 
              className="fee-logo"
            />
          </div>
          <h1 className="fee-title">Fee Structure</h1>
          <p className="fee-subtitle">Academic Year 2024/2025</p>
        </div>
      </section>

      {/* Fee Table Section */}
      <section className="fee-content">
        <div className="fee-container">
          <div className="fee-card">
            <div className="table-wrapper">
              <table className="fee-table">
                <thead>
                  <tr>
                    <th className="grade-column">Grade</th>
                    <th>Term 1</th>
                    <th>Term 2</th>
                    <th>Term 3</th>
                  </tr>
                </thead>
                <tbody>
                  {feeData.map((row, index) => (
                    <tr key={index}>
                      <td className="grade-cell">{row.grade}</td>
                      <td>KSh {row.term1}</td>
                      <td>KSh {row.term2}</td>
                      <td>KSh {row.term3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Additional Information */}
            <div className="fee-notes">
              <div className="note-item">
                <svg className="note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
                <p>All boarders will pay an additional boarding fee of <strong>KSh 7,200</strong> per term.</p>
              </div>
              
              <div className="note-item">
                <svg className="note-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4M12 8h.01"/>
                </svg>
                <p>Admission fee for new pupils: <strong>KSh 1,000</strong> (one-time payment)</p>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="payment-section">
              <h3 className="payment-title">Payment Information</h3>
              <div className="payment-grid">
                <div className="payment-card">
                  <svg className="payment-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                  <h4>Bank Transfer</h4>
                  <p>Direct bank deposits accepted</p>
                </div>
                
                <div className="payment-card">
                  <svg className="payment-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  <h4>M-PESA</h4>
                  <p>Mobile money payments</p>
                </div>
                
                <div className="payment-card">
                  <svg className="payment-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>
                  <h4>Cash Payment</h4>
                  <p>At school office during business hours</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="fee-cta">
              <button className="apply-btn">
                Apply for Admission
                <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}