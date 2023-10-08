import styles from './Info.module.css';

export default function Info() {
  return (
    <>
	<h1 className={styles.title}>Welcome to Info :)</h1>	
      
	  <div className={styles.container}>
        <div className={styles.section}>
        	<h2>The Problem: Imposter Syndrome</h2>
          	<p><br></br><br></br>We've all been there. Imposter syndrome affects 70% of college students, 
			leading to anxiety, depression, and burnout from the high expectations, self-doubt, 
			and avoidance of help (A, B). We propose an anonymous platform to help students connect, 
			share experiences, and feel safe in overcoming imposter syndrome together (C).

			  <br></br>
			  <br></br>
			Sources:<br></br>
				A: (Canning et al., 2020; Peteet et al., 2015)<br></br>
				B: (Chae et al., 1995; Serge et al., 2021)<br></br>
				C: (Serge et al., 2021; Vaishnav, 2020)
</p>
        </div>
        <div className={styles.section}>
          	<h2>Our Mission:</h2>
          	<p><br></br><br></br>
			Our mission is to create a safe and supportive online 
			community for students struggling with imposter syndrome. 
			
			By providing an anonymous forum, we aim to reduce the isolation and stigma students 
			face when they don't understand course material or assignments. 
			
			Our chatbot, powered by OpenAI, will facilitate constructive discussions where students can 
			openly share their vulnerabilities without judgment. Moderation will prevent 
			harmful or malicious content. Together, through open communication and compassion, 
			we will empower students to overcome self-doubt and achieve their academic potential.</p>
        </div>
        <div className={styles.section}>
          	<h2>Stastics</h2>
          	<p>
			  	• Up to 70% of college students experience feelings of imposter syndrome at some point during their academic careers (Canning et al., 2020; Peteet et al., 2015).
				<br></br>
				<br></br>
				• In one study of over 1,700 undergraduate students, imposter syndrome was positively correlated with higher levels of anxiety, depression, psychological distress and burnout (Serge et al., 2021).
				<br></br>
				<br></br>
				• College students experiencing imposter syndrome are more likely to set unattainably high standards for their academic performance, with 65% expecting nothing less than perfection (Chae et al., 1995).
				<br></br>
				<br></br>
				• In a study of over 600 graduate students, 45% of those experiencing imposter syndrome reported feeling too ashamed or embarrassed to seek academic assistance when struggling (Peteet et al., 2015).</p>
        </div>
      </div>
    </>
  );
}