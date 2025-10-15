import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Menu, X, ChevronDown, BookOpen, FileText, Download } from 'lucide-react'
import deanHallPhoto from './assets/dean-hall.jpeg'
import cognimapLogo from './assets/cognimap-logo.png'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'teaching', 'writing', 'cv', 'speaking', 'connect']
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
              Dean Hall
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'work', 'teaching', 'writing', 'cv', 'speaking', 'connect'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors ${
                    activeSection === section 
                      ? 'text-foreground' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section === 'cv' ? 'CV' : section}
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
              {['about', 'work', 'teaching', 'writing', 'cv', 'speaking', 'connect'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-4 py-2 capitalize text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {section === 'cv' ? 'CV' : section}
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
                Dean Hall
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground font-light">
                Sociologist, Writer, and Founder developing an AI Research tool
              </p>
              <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                My work sits at the intersection of politics, religion, race, and power—studying belief systems 
                not as abstract ideologies, but as deeply embedded worldviews that shape behavior, policy, and belonging.
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => scrollToSection('connect')}
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
            
            {/* Photo */}
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={deanHallPhoto} 
                  alt="Dean Hall" 
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
              I'm a sociologist, writer, and public speaker whose work sits at the intersection of politics, religion, 
              race, and power. I study belief systems—especially Christian Nationalism—not as abstract ideologies, but 
              as deeply embedded worldviews that shape behavior, policy, and belonging in everyday life.
            </p>
            <p>
              My research asks hard questions: Who gets to feel at home in America? Who gets to trust the system? 
              Who's left out—and why?
            </p>
            <p>
              This work isn't academic for me. It's personal. As a formerly incarcerated person, I've lived the 
              consequences of systemic exclusion. I've rebuilt a life, a career, and a voice from the margins. 
              That experience doesn't just inform my research—it drives it. I bring that same clarity, purpose, 
              and no-nonsense approach into every space I enter—whether it's a classroom, a conference, or a 
              community forum.
            </p>
            <p>
              People experience me as calm, direct, and fully present. I don't posture or perform. I listen deeply, 
              speak plainly, and ask others to do the same. My style is grounded in care, critical thought, and a 
              refusal to accept the world as it is when we know it can be otherwise.
            </p>
          </div>
        </div>
      </section>

      {/* Work & Research Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Work & Research</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              My research focuses on belief systems as lived experiences—particularly examining how Christian Nationalism 
              functions not merely as a political ideology, but as a comprehensive worldview that structures social 
              relationships, institutional practices, and individual identities.
            </p>
            <p>
              Theoretically grounded in the work of <strong>Antonio Gramsci</strong>, <strong>Paulo Freire</strong>, 
              and <strong>Pierre Bourdieu</strong>, my research examines how hegemonic power operates through cultural 
              institutions, how consciousness can be transformed through critical pedagogy, and how social and cultural 
              capital reproduce inequality across generations. This framework allows me to understand belief systems 
              not as individual choices, but as products of historical struggle, institutional power, and embodied practice.
            </p>
            <p>
              I investigate the mechanisms through which certain groups are granted belonging and legitimacy while others 
              face systemic exclusion. This work examines the intersection of religious identity, racial hierarchy, and 
              political power in shaping who is considered a "real" American and who remains perpetually outside that circle.
            </p>
            
            {/* CogniMap Section */}
            <div className="my-12 bg-muted/50 border border-border rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src={cognimapLogo} 
                    alt="CogniMap Logo" 
                    className="w-32 h-32 md:w-40 md:h-40"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">CogniMap</h3>
                  <p className="text-foreground">
                    Beyond traditional academic research, I'm developing <strong>CogniMap</strong>—an AI research tool 
                    designed to make sociological analysis more accessible and actionable. This project reflects my 
                    commitment to bridging the gap between scholarly insight and practical application, creating resources 
                    that serve communities working toward justice and systemic change.
                  </p>
                </div>
              </div>
            </div>
            
            <p>
              My approach is rooted in the understanding that research should serve those most affected by the systems 
              we study. I'm interested in work that doesn't just describe inequality, but actively contributes to 
              dismantling it.
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Teaching</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              My teaching philosophy is rooted in the transformative pedagogies of <strong>bell hooks</strong> and 
              <strong>Paulo Freire</strong>. I approach the classroom as a space for liberation—where learning is not 
              about depositing information into passive students, but about creating conditions for critical consciousness 
              and collective inquiry.
            </p>
            <p>
              Following hooks, I believe that education should be a practice of freedom. The classroom must be a place 
              where students can bring their whole selves—their experiences, their questions, their struggles—and where 
              we collectively challenge systems of domination. I work to create learning environments that are rigorous 
              and caring, intellectually demanding and emotionally supportive, where vulnerability and critical thinking 
              coexist.
            </p>
            <p>
              Drawing from Freire's concept of conscientização, I structure courses around problem-posing rather than 
              problem-solving. Students don't receive pre-packaged answers about social inequality; instead, we investigate 
              together how power operates, whose interests are served by existing arrangements, and what possibilities 
              exist for transformation. This means treating students as co-creators of knowledge, not consumers of it.
            </p>
            <p>
              In practice, this looks like classrooms where we read theory alongside lived experience, where academic 
              concepts are tested against the realities students know, and where learning is understood as preparation 
              for action in the world. I ask students to think critically about the systems that shape their lives and 
              to imagine—and work toward—alternatives.
            </p>
            <p>
              My own experience of incarceration and reentry shapes how I teach. I know what it means to be written off 
              by institutions, to be told you don't belong in spaces of learning and power. That knowledge informs my 
              commitment to creating classrooms where all students—especially those the system has marginalized—are 
              recognized as knowers, thinkers, and agents of change.
            </p>
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Writing</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              My writing bridges academic scholarship and public engagement, translating complex sociological analysis 
              into accessible prose that speaks to diverse audiences. I write for those inside and outside the academy—
              for scholars, organizers, practitioners, and anyone working to understand and challenge systems of power.
            </p>
            
            <div className="mt-8 bg-muted/50 border border-border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Selected Publications & Essays</h3>
                  <p className="text-muted-foreground">
                    Publications, essays, and articles are currently being compiled. Check back soon for a comprehensive 
                    list of academic papers, public scholarship, and commentary on politics, religion, race, and power.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8">
              Whether I'm writing for academic journals or public forums, my goal remains the same: to make visible 
              the systems that shape our lives, to ask hard questions about power and belonging, and to contribute 
              to conversations that move us toward more just and equitable arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Curriculum Vitae</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              My curriculum vitae provides a comprehensive overview of my academic background, research projects, 
              teaching experience, publications, presentations, and community engagement.
            </p>
            
            <div className="mt-8 bg-muted/50 border border-border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">Download CV</h3>
                  <p className="text-muted-foreground">
                    A detailed CV is available upon request. Please contact me directly to receive the most current version.
                  </p>
                  <div className="pt-4">
                    <a 
                      href="mailto:contact@deanthall.com?subject=CV%20Request"
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

      {/* Speaking & Engagement Section */}
      <section id="speaking" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Speaking & Engagement</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              I speak to diverse audiences—from academic conferences to community organizations—about the systems 
              that shape belonging, exclusion, and power in American life. My presentations cut through theoretical 
              abstraction to address the concrete ways belief systems operate in policy, institutions, and everyday 
              interactions.
            </p>
            <p>
              Whether I'm addressing scholars, practitioners, or community members, my approach remains consistent: 
              I'm direct, grounded, and focused on actionable insight. I don't traffic in academic jargon or 
              performative complexity. Instead, I offer clear analysis rooted in both research and lived experience.
            </p>
            <p>
              My speaking engagements typically explore themes of Christian Nationalism, systemic exclusion, mass 
              incarceration, racial justice, and the possibilities for building more equitable systems. I'm particularly 
              interested in conversations that bridge academic research and community organizing—spaces where critical 
              analysis meets practical action.
            </p>
            <p>
              I bring the same presence to speaking that I bring to all my work: calm, purposeful, and committed to 
              honest dialogue. I create space for difficult conversations and invite audiences to think critically 
              about systems we often take for granted.
            </p>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">Let's Connect</h2>
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              I'm interested in connecting with people and organizations working toward systems that are less 
              exclusionary and more just, honest, and human.
            </p>
            <p>
              Whether you're engaged in research, organizing, policy work, or building tools and platforms that 
              serve marginalized communities, I'd welcome the conversation. I'm particularly interested in 
              collaborations that bridge different forms of expertise and center the voices of those most affected 
              by systemic inequality.
            </p>
            <p>
              If you're working on projects that challenge existing power structures, create space for honest 
              dialogue about difficult topics, or develop practical solutions to systemic problems, let's talk.
            </p>
            <div className="pt-8">
              <div className="bg-muted/50 border border-border rounded-lg p-8 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Get in Touch</h3>
                <p className="text-muted-foreground">
                  Reach out to discuss collaboration, speaking engagements, or research partnerships.
                </p>
                <div className="pt-4">
                  <a 
                    href="mailto:contact@deanthall.com"
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
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © {new Date().getFullYear()} Dean Hall. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

