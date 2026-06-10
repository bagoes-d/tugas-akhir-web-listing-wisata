import React from 'react';
// 1. Memanggil komponen Hero (background pariwisata) dari folder components yang benar
import Hero from '../components/Hero'; 
// 2. Memanggil komponen Card pariwisata
import Card from '../components/Card'; 
// 3. Memanggil data json destinasi wisata kamu
import wisataData from '../data/wisata.json'; 

export default function Home() {
  return (
    <div style={{ backgroundColor: '#070b18', minHeight: '100vh', color: '#fff' }}>
      
      {/* 4. Kita pasang komponen Hero kamu paling atas */}
      <Hero /> 

      {/* 5. Bagian daftar kartu wisata di bawahnya */}
      <div style={{ padding: '50px 24px', maxWidth: '1400px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '24px', fontWeight: '700' }}>
          Destinasi Populer
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {wisataData && wisataData.map((wisata) => (
            <Card key={wisata.id} wisata={wisata} />
          ))}
        </div>
      </div>

    </div>
  );
}