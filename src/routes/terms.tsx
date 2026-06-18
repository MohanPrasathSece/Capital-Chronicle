import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/terms')({
  component: TermsConditions,
});

function TermsConditions() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container-edit py-16 md:py-24 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold uppercase mb-8 border-b-4 border-black pb-4">Conditions Générales</h1>
        
        <div className="space-y-8 font-serif text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Acceptation des Conditions</h2>
            <p>En accédant et en utilisant Capital Chronicle, vous acceptez et convenez d'être lié par les conditions et dispositions de cet accord. De plus, lors de l'utilisation des services particuliers de ce site Web, vous serez soumis à toutes les directives ou règles affichées applicables à ces services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Éligibilité</h2>
            <p>Vous devez avoir au moins 18 ans pour utiliser notre site Web. En utilisant notre site Web et en acceptant ces conditions générales, vous garantissez et déclarez que vous avez au moins 18 ans.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Objectif du Site Web</h2>
            <p>Capital Chronicle fournit des actualités, des recherches et des analyses liées aux marchés financiers numériques, à la technologie et aux actifs numériques. Le contenu est fourni à des fins d'information et d'éducation uniquement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Responsabilités de l'Utilisateur</h2>
            <p>Vous acceptez d'utiliser le site Web uniquement à des fins légales et d'une manière qui n'enfreint pas les droits, ne restreint ni n'empêche l'utilisation et la jouissance du site Web par quiconque.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Utilisation Acceptable</h2>
            <p>Vous ne devez pas utiliser ce site Web d'une manière qui cause, ou peut causer, des dommages au site Web ou une altération de la disponibilité ou de l'accessibilité du site Web ; ou d'une manière illicite, illégale, frauduleuse ou nuisible.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Activités Interdites</h2>
            <p>S'engager dans toute exploration de données, collecte de données, extraction de données ou toute autre activité similaire en relation avec ce site Web, ou lors de l'utilisation de ce site Web, est strictement interdit sauf autorisation écrite expresse.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Propriété Intellectuelle</h2>
            <p>Sauf indication contraire, Capital Chronicle et/ou ses concédants de licence détiennent les droits de propriété intellectuelle de tout le matériel sur le site Web. Tous les droits de propriété intellectuelle sont réservés.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Exactitude des Informations</h2>
            <p>Bien que nous nous efforcions de garder les informations à jour et correctes, nous ne faisons aucune déclaration ni garantie d'aucune sorte, expresse ou implicite, concernant l'exhaustivité, l'exactitude, la fiabilité, la pertinence ou la disponibilité en ce qui concerne le site Web ou les informations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Aucun Conseil Financier, d'Investissement, Fiscal ou Juridique</h2>
            <p>Les informations fournies sur Capital Chronicle ne constituent pas des conseils en investissement, des conseils financiers, des conseils de trading ou tout autre type de conseil, et vous ne devez traiter aucun contenu du site Web comme tel. Capital Chronicle ne recommande pas qu'une crypto-monnaie doive être achetée, vendue ou détenue par vous. Veuillez faire preuve de diligence raisonnable et consulter votre conseiller financier avant de prendre des décisions d'investissement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Divulgation des Risques liés aux Crypto-monnaies</h2>
            <p>Le trading de crypto-monnaies comporte un niveau de risque élevé et peut ne pas convenir à tous les investisseurs. Avant de décider d'échanger des crypto-monnaies, vous devez examiner attentivement vos objectifs d'investissement, votre niveau d'expérience et votre appétit pour le risque. Il est possible que vous subissiez une perte partielle ou totale de votre investissement initial et, par conséquent, vous ne devriez pas investir de l'argent que vous ne pouvez pas vous permettre de perdre.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Aucune Garantie de Rendement des Investissements</h2>
            <p>Les performances passées ne préjugent pas des résultats futurs. Nous ne garantissons aucun rendement des investissements basé sur les informations fournies sur notre site Web.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Limitation de Responsabilité</h2>
            <p>En aucun cas, nous ne serons responsables de toute perte ou dommage, y compris, sans s'y limiter, les pertes ou dommages indirects ou consécutifs, ou de toute perte ou dommage de quelque nature que ce soit découlant de la perte de données ou de bénéfices découlant de, ou en relation avec, l'utilisation de ce site Web.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Indemnisation</h2>
            <p>Par les présentes, vous indemnisez dans toute la mesure du possible Capital Chronicle contre toutes les responsabilités, coûts, demandes, causes d'action, dommages et dépenses découlant de quelque manière que ce soit de votre violation de l'une des dispositions des présentes Conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Liens Tiers</h2>
            <p>Grâce à ce site Web, vous pouvez créer des liens vers d'autres sites Web qui ne sont pas sous le contrôle de Capital Chronicle. Nous n'avons aucun contrôle sur la nature, le contenu et la disponibilité de ces sites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Référence à la Politique de Confidentialité</h2>
            <p>Votre utilisation du site Web est également régie par notre Politique de Confidentialité. Veuillez consulter notre Politique de Confidentialité, qui régit également le site et informe les utilisateurs de nos pratiques de collecte de données.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Suspension ou Résiliation de l'Accès</h2>
            <p>Nous pouvons résilier ou suspendre l'accès à notre Service immédiatement, sans préavis ni responsabilité, pour quelque raison que ce soit, y compris, sans s'y limiter, si vous ne respectez pas les Conditions.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Droit Applicable</h2>
            <p>Ces Conditions seront régies et interprétées conformément aux lois du Royaume-Uni, et vous vous soumettez à la juridiction non exclusive des tribunaux étatiques et fédéraux situés au Royaume-Uni pour la résolution de tout litige.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Résolution des Litiges</h2>
            <p>Tout litige découlant de ou lié à ces Conditions Générales sera résolu par arbitrage exécutoire, plutôt qu'en justice, sauf que vous pouvez faire valoir des réclamations devant la cour des petites créances si vos réclamations sont éligibles.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Divisibilité</h2>
            <p>Si une disposition de ces Conditions s'avère invalide en vertu d'une loi applicable, ces dispositions seront supprimées sans affecter les autres dispositions des présentes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Modifications de ces Conditions</h2>
            <p>Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Conditions à tout moment. Si une révision est importante, nous essaierons de fournir un préavis d'au moins 30 jours avant que les nouvelles conditions ne prennent effet.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase mb-4">Coordonnées</h2>
            <p>Si vous avez des questions concernant ces Conditions, veuillez nous contacter via notre page Demande de renseignements (Enquiry).</p>
          </section>

          <section>
            <p className="text-sm italic">Dernière date de mise à jour : 18 juin 2026</p>
          </section>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t-4 border-black py-6 text-center font-sans font-bold uppercase text-xs mt-16">
        <p>© {new Date().getFullYear()} Capital Chronicle. Imprimé à l'ère numérique.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="/privacy" className="hover:underline">Politique de Confidentialité</a>
          <a href="/terms" className="hover:underline">Conditions Générales</a>
        </div>
      </footer>
    </div>
  );
}
