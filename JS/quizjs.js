//Array for dyanamic questions as options   
const  quiz =
[
    {
        q:'What is the primary goal of a penetration test?',
        options:['To identify vulnerabilities in a system',
            'To exploit vulnerabilities in a system',
            'To patch vulnerabilities in a system',
            'To develop a security policy for a system'],
        a:0,
        hint:'high software ,more weakness',
        exp:'A penetration test, also known as a pen test or ethical hacking, is a simulated cyber attack against a computer system, network, or web application to assess its security. The goal is to identify vulnerabilities that an attacker could exploit, so that they can be fixed before a malicious attacker can exploit them.'
        
    },
    {
        q:'Which of the following is a type of malware that demands payment in exchange for restoring access to data?',
        options:['Virus','Worm','Trojan','Ransomware'],
        a:3,
        hint:"malicious software is also called as malware",
        exp:"Ransomware is a type of malicious software (malware) that encrypts a victims files or locks their device and demands a ransom in exchange for the decryption key or unlock code. It's a type of cyber extortion, where the attacker demands payment in exchange for restoring access to the data or system."

    },
    {
        q:'What is the purpose of a demilitarized zone (DMZ) in a network?',
        options:['To provide an additional layer of security for internal networks',
            'To separate the Internet from the internal network',
            'To connect multiple internal networks together',
            'To provide a wireless access point for guests'],
        a:0,
        hint:"zone contains a internal things to protect",
        exp:"A demilitarized zone (DMZ) is a network segment that separates the public Internet from an internal network. It's a buffer zone that adds an extra layer of security by isolating public-facing services, such as web servers, email servers, and VPN servers, from the internal network. This helps to prevent attackers from accessing the internal network if they compromise a public-facing service."

    },
    {
        q:'Which of the following is a type of attack where an attacker sends a large amount of traffic to a network in an attempt to overwhelm it?',
        options:['Phishing',' SQL Injection',
            'Denial of Service (DoS)','Cross-Site Scripting (XSS)'],
        a:2,
        hint:"more traffic in servers less chance to accept it ",
        exp:" A Denial of Service (DoS) attack is to flood the network with traffic, exhausting its resources and causing it to become slow or unresponsive. This can be done by sending a large number of packets, requests, or connections to the network, exceeding its capacity to handle them."

    },
    {
        q:'What is the purpose of the firewall configuration shown below?',
        options:['To block incoming traffic on port 80',
            'To allow outgoing traffic on port 443',
            'To block outgoing traffic on port',
            'To allow incoming traffic on port 21'],
        a:0,
        img:'http.jpeg',
        hint:"Look at the direction of the traffic and the port numbers.",
        exp:"Firewalls are used to control incoming and outgoing network traffic based on predetermined security rules."
      
    },
    {
        q:' Identify the type of encryption used in the diagram below:?',
        options:['Symmetric encryption',
            'Asymmetric encryption',
            'Hash function',
            'Digital signature'],
        a:1,
        img:'Asinc.WEBP',
        hint:"Look at the number of keys used and the direction of the encryption process.",
        exp:"Symmetric encryption uses the same key for encryption and decryption, while asymmetric encryption uses a pair of keys: one for encryption and another for decryption. Hash functions are one-way encryption, and digital signatures are used for authentication and non-repudiation." 
   },
    {
        q:'Does the following website use HTTPS:?',
        options:['True','False'],
        a:0,
        img:'http.png.png',
        hint:" check on starting of website ",
        exp:" the given URL was starting http:// means  it uses HTTP for protection"

    }
]