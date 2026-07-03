import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, ChevronDown, BookOpen, FileText, Download, ExternalLink } from 'lucide-react'
import deanHallPhoto from './assets/dean-hall.jpeg'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'research', 'publications', 'teaching', 'cv', 'connect']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-foreground hover:text-accent-foreground transition-colors"
            >
              Dean T. Hall
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'about', label: 'About' },
                { id: 'research', label: 'Research' },
                { id: 'publications', label: 'Publications' },
                { id: 'teaching', label: 'Teaching' },
                { id: 'cv', label: 'CV' },
                { id: 'connect', label: 'Connect' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'research', label: 'Research' },
                { id: 'publications', label: 'Publications' },
                { id: 'teaching', label: 'Teaching' },
                { id: 'cv', label: 'CV' },
                { id: 'connect', label: 'Connect' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Dean T. Hall
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground font-light">
                Dignity. Power. Recognition.
              </p>
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                Sociologist studying the production of recognition, the normalization of domination, 
                and the social conditions through which liberation becomes possible.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed italic">
                Building a Sociology of Liberation across religion, technology, and pedagogy.
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection('research')}
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Explore the Work
                </Button>
              </div>
            </div>
            
            {/* Photo */}
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={deanHallPhoto} 
                  alt="Dean T. Hall" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="mt-16 mx-auto block text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">About</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              I am a sociologist whose work examines how institutions produce recognition, normalize domination, 
              and foreclose dignity. My research program develops liberation-oriented frameworks for transforming 
              those conditions across religion, artificial intelligence, and pedagogy.
            </p>
            <p>
              Theoretically grounded in <strong>Gramsci</strong>, <strong>Freire</strong>, <strong>Mead</strong>, 
              and <strong>Bourdieu</strong>, I investigate how systems of exclusion become common sense and how 
              counter-formations emerge. My work moves beyond diagnosis toward construction: asking not only how 
              domination reproduces itself, but what social arrangements make collective flourishing possible.
            </p>
            <p>
              I am a formerly incarcerated scholar. I know what it means to have your claim on recognition 
              suspended by institutions. That experience does not merely inform my research. It is the ground 
              from which the questions arise. Who is excluded? Why? And what arrangements make that exclusion 
              appear natural, necessary, or deserved?
            </p>
            <p>
              I hold a Master of Arts in Sociology from San Diego State University, where my thesis, 
              <em>Dismantling the Sacred Veil: American Sacred Nationalism as America's Embedded Worldview</em>, 
              laid the foundation for my current book project. I teach sociology at the community college level 
              and am developing a research program that bridges critical theory, AI ethics, and public scholarship.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Research Program</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            My work is organized around a central framework: a <strong className="text-foreground">Sociology of Liberation</strong>. 
            This framework investigates how domination becomes common sense and how social arrangements can be 
            redesigned to support dignity, plurality, and collective flourishing. It operates across four domains.
          </p>

          {/* Four Domains Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Ideological Domain */}
            <div className="bg-muted/50 border border-border rounded-lg p-8 space-y-4">
              <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                Ideological Domain
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                American Sacred Nationalism
              </h3>
              <p className="text-sm text-muted-foreground italic">
                How does domination become sacred, moral, or common sense?
              </p>
              <p className="text-foreground">
                This project argues that "Christian nationalism" misnames a deeper, four-century-old embedded 
                worldview. American Sacred Nationalism is not Christianity entering politics. It is nationalism 
                appearing in Christian form: a pedagogical regime that sacralizes conquest, racial hierarchy, 
                capitalism, punishment, and national innocence through everyday institutional life.
              </p>
              <p className="text-sm text-muted-foreground">
                Book proposal under review at Springer Nature.
              </p>
            </div>

            {/* Ethical Domain */}
            <div className="bg-muted/50 border border-border rounded-lg p-8 space-y-4">
              <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                Ethical Domain
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                The Precautionary Principle of Dignity
              </h3>
              <p className="text-sm text-muted-foreground italic">
                What ethical commitments make liberation possible under uncertainty?
              </p>
              <p className="text-foreground">
                When the moral status of an entity is uncertain, ethical actors should act as if that entity 
                merits dignity, respect, and transparency. PPoD shifts AI ethics from the ontological status 
                of the machine to the reflexive formation of the human subject. It protects our capacity for 
                liberatory subjectivity by refusing habits of domination in interaction.
              </p>
              <p className="text-sm text-muted-foreground">
                Article under review at <em>AI & Society</em>.
              </p>
            </div>

            {/* Structural Domain */}
            <div className="bg-muted/50 border border-border rounded-lg p-8 space-y-4">
              <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                Structural Domain
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Stagecraft
              </h3>
              <p className="text-sm text-muted-foreground italic">
                What institutional arrangements support plurality and dissent?
              </p>
              <p className="text-foreground">
                Current AI development treats intelligence as an individual property of a system. Stagecraft 
                begins from a different premise: human intelligence in complex environments is a social 
                accomplishment produced through interaction, role-taking, and negotiated sense-making. The 
                project develops an ethnographic study of how AI researchers collaboratively produce 
                "intelligence" in practice.
              </p>
              <p className="text-sm text-muted-foreground">
                NSF proposal in development (SBE / Human-Centered AI).
              </p>
            </div>

            {/* Pedagogical Domain */}
            <div className="bg-muted/50 border border-border rounded-lg p-8 space-y-4">
              <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                Pedagogical Domain
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Despertar
              </h3>
              <p className="text-sm text-muted-foreground italic">
                How do people develop the capacity to name the world and transform it?
              </p>
              <p className="text-foreground">
                Despertar is an eighteen-track concept album that translates sociological theory into music, 
                designed for pedagogical use in introductory sociology. It rejects the assumption that theory 
                must remain confined to academic texts and treats art as a legitimate site of sociological 
                learning. Each track is anchored in specific theorists and follows the arc of a sociology course.
              </p>
              <p className="text-sm text-muted-foreground">
                Active pedagogical infrastructure with Teaching Hub.
              </p>
            </div>
          </div>

          {/* Connecting Statement */}
          <div className="mt-12 p-8 border-l-4 border-primary bg-muted/20 rounded-r-lg">
            <p className="text-lg text-foreground leading-relaxed">
              These projects are not separate interests. They are a single argument built across four registers. 
              Formation produces exclusion by teaching hierarchy as common sense. Liberation requires ethical 
              reorientation, structural redesign, and pedagogical practices that restore dignity, plurality, 
              and collective agency.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Publications & Manuscripts</h2>
          
          {/* Under Review */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Under Review
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary/50 pl-6 space-y-1">
                  <p className="text-foreground font-medium">
                    "When the Worldview Exceeds the Index: American Sacred Nationalism and the Limits of Christian Nationalism Measurement"
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <em>Sociological Theory</em> (submitted 2025)
                  </p>
                </div>
                <div className="border-l-2 border-primary/50 pl-6 space-y-1">
                  <p className="text-foreground font-medium">
                    "America's Long Liturgy"
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <em>Religion, State and Society</em> (submitted 2025)
                  </p>
                </div>
                <div className="border-l-2 border-primary/50 pl-6 space-y-1">
                  <p className="text-foreground font-medium">
                    "The Precautionary Principle of Dignity: Toward a Freirean Ethics of Human-AI Collaboration"
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <em>AI & Society</em> (submitted 2025)
                  </p>
                </div>
              </div>
            </div>

            {/* Book Project */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Book Project
              </h3>
              <div className="border-l-2 border-primary/50 pl-6 space-y-2">
                <p className="text-foreground font-medium">
                  <em>The Sacred Nation: Why "Christian Nationalism" Misnames America's Sacred Political Formation</em>
                </p>
                <p className="text-muted-foreground text-sm">
                  Proposal under review at Springer Nature
                </p>
                <p className="text-foreground text-sm mt-2">
                  A nine-chapter monograph developing American Sacred Nationalism as a four-century pedagogical 
                  regime. Traces the formation from colonial theology and the Doctrine of Discovery through law, 
                  schooling, civic ritual, sport, prosperity-gospel economics, media, and state violence.
                </p>
              </div>
            </div>

            {/* Thesis */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Thesis
              </h3>
              <div className="border-l-2 border-primary/50 pl-6 space-y-1">
                <p className="text-foreground font-medium">
                  <em>Dismantling the Sacred Veil: American Sacred Nationalism as America's Embedded Worldview</em>
                </p>
                <p className="text-muted-foreground text-sm">
                  M.A. Thesis, San Diego State University (2024)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Teaching</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              My teaching is grounded in the transformative pedagogies of <strong>Paulo Freire</strong> and 
              <strong> bell hooks</strong>. Education is not information transfer. It is a process of becoming: 
              developing the capacity to name the world, question one's own formation, and act collectively 
              to transform the structures that shape our lives.
            </p>
            <p>
              I structure courses around problem-posing rather than problem-solving. Students are not asked 
              what to think but how to examine power, history, and possibility. Drawing from Freire's concept 
              of conscientization, I invite students to interrogate how systems of meaning transform historically 
              contingent arrangements into seemingly natural realities.
            </p>
            <p>
              My own experience of incarceration and reentry shapes how I teach. I know what it means to be 
              written off by institutions, to have your claim on recognition suspended. That experience grounds 
              my commitment to ensuring that all students, especially those historically marginalized, are 
              recognized as knowers, thinkers, and agents of change.
            </p>
            <p>
              Despertar, my eighteen-track concept album on sociological theory, is integrated into my 
              teaching practice. It translates critical theory into accessible, affective, and dialogical 
              form, reflecting a central commitment: knowledge becomes transformative when it is lived, 
              shared, and connected to experience.
            </p>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Curriculum Vitae</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Education</h3>
              <p>M.A. Sociology, San Diego State University</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Research Interests</h3>
              <p>
                Sociology of religion, political sociology, critical race theory, AI ethics, critical pedagogy, 
                sociology of knowledge, nationalism studies, sociology of liberation
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Theoretical Foundations</h3>
              <p>
                Antonio Gramsci, Paulo Freire, Pierre Bourdieu, George Herbert Mead, W.E.B. Du Bois, 
                Ida B. Wells, bell hooks, Frantz Fanon, Angela Davis, Loic Wacquant
              </p>
            </div>
            
            <div className="mt-8 bg-muted/50 border border-border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Full CV</h3>
                  <p className="text-muted-foreground">
                    A complete curriculum vitae is available upon request.
                  </p>
                  <div className="pt-4">
                    <a 
                      href="mailto:dthall@sdsu.edu?subject=CV%20Request"
                      className="inline-block"
                    >
                      <Button size="lg" className="text-base px-6 py-4">
                        <Download className="w-5 h-5 mr-2" />
                        Request CV
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Connect</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              I am interested in connecting with scholars, organizers, educators, and practitioners 
              working on questions of dignity, power, liberation, and systemic transformation. I welcome 
              conversations about research collaboration, speaking engagements, and pedagogical partnerships.
            </p>
            <p>
              I am particularly interested in work that refuses to separate critique from construction, 
              that centers the voices of those most affected by systems of exclusion, and that takes 
              seriously the question of what social arrangements make collective flourishing possible.
            </p>
            <div className="pt-8">
              <div className="bg-muted/50 border border-border rounded-lg p-8 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Get in Touch</h3>
                <p className="text-muted-foreground">
                  For collaboration, speaking, or research inquiries.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a 
                    href="mailto:dthall@sdsu.edu"
                    className="inline-block"
                  >
                    <Button size="lg" className="text-lg px-8 py-6">
                      Email Me
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 text-muted-foreground">
            <p className="text-sm">
              Dean T. Hall | Sociologist of Liberation
            </p>
            <p className="text-xs">
              San Diego State University
            </p>
            <p className="text-xs mt-4">
              &copy; {new Date().getFullYear()} Dean T. Hall. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
