
  // Envelope open/close on click or Enter/Space
//   const stage = document.getElementById('envelopeStage');
//   const envelope = document.getElementById('envelope');
//   function toggleEnvelope(){ stage.classList.toggle('open'); }
//   envelope.addEventListener('click', toggleEnvelope);
//   envelope.addEventListener('keydown', (e)=>{
//     if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggleEnvelope(); }
//   });

  // Scroll reveal
  const revealEls = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, {threshold:0.15});
  revealEls.forEach(el=>io.observe(el));