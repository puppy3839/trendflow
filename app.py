import streamlit as st
import streamlit.components.v1 as components
import os
import socket

# Page config for wide layout & title
st.set_page_config(
    page_title="TrendFlow — India Social Media Propagation Analyzer",
    page_icon="🔥",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Hide Streamlit default header, footer & padding for immersive full-screen UI
st.markdown("""
<style>
    #MainMenu {visibility: hidden;}
    footer {visibility: hidden;}
    header {visibility: hidden;}
    .block-container {
        padding-top: 0rem !important;
        padding-bottom: 0rem !important;
        padding-left: 0rem !important;
        padding-right: 0rem !important;
        max-width: 100% !important;
    }
    iframe {
        width: 100% !important;
        height: 98vh !important;
        border: none !important;
    }
</style>
""", unsafe_allow_html=True)

# Path to social/index.html
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SOCIAL_DIR = os.path.join(BASE_DIR, "social")
INDEX_PATH = os.path.join(SOCIAL_DIR, "index.html")

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

# Read HTML & inline CSS/JS files into standalone HTML for Streamlit iframe
if os.path.exists(INDEX_PATH):
    with open(INDEX_PATH, "r", encoding="utf-8") as f:
        html_content = f.read()

    def read_file(rel_path):
        p = os.path.join(SOCIAL_DIR, rel_path)
        if os.path.exists(p):
            with open(p, "r", encoding="utf-8") as file:
                return file.read()
        return ""

    style_css = read_file("css/style.css")
    components_css = read_file("css/components.css")
    data_js = read_file("js/data.js")
    service_js = read_file("js/service.js")
    charts_js = read_file("js/charts.js")
    propagation_js = read_file("js/propagation.js")
    app_js = read_file("js/app.js")

    # Inlining CSS & JS files
    inlined_html = html_content
    inlined_html = inlined_html.replace('<link rel="stylesheet" href="css/style.css">', f'<style>{style_css}</style>')
    inlined_html = inlined_html.replace('<link rel="stylesheet" href="css/components.css">', f'<style>{components_css}</style>')
    inlined_html = inlined_html.replace('<script src="js/data.js"></script>', f'<script>{data_js}</script>')
    inlined_html = inlined_html.replace('<script src="js/service.js"></script>', f'<script>{service_js}</script>')
    inlined_html = inlined_html.replace('<script src="js/charts.js"></script>', f'<script>{charts_js}</script>')
    inlined_html = inlined_html.replace('<script src="js/propagation.js"></script>', f'<script>{propagation_js}</script>')
    inlined_html = inlined_html.replace('<script src="js/app.js"></script>', f'<script>{app_js}</script>')

    # Render full-screen html component inside Streamlit
    components.html(inlined_html, height=1300, scrolling=True)
else:
    st.error("Could not find social/index.html in project directory.")
