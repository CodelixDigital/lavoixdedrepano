const stats = [
  { number: '2%', label: 'Population touchée en RDC', description: 'Plus de 2 millions de personnes' },
  { number: '300,000', label: 'Naissances par an', description: 'Nouveaux cas de drépanocytose' },
  { number: '80%', label: 'Mortalité infantile', description: 'Sans prise en charge adaptée' },
  { number: '25%', label: 'Porteurs du trait', description: 'De la population congolaise' },
];

export default function StatsSection() {
  return (
    <section className="section-padding bg-red-600 text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            La drépanocytose en RDC : Les chiffres
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Comprendre l'ampleur du défi sanitaire que représente la drépanocytose 
            en République Démocratique du Congo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <div className="text-4xl sm:text-5xl font-bold text-white">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-red-100">
                {stat.label}
              </div>
              <div className="text-sm text-red-200">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}