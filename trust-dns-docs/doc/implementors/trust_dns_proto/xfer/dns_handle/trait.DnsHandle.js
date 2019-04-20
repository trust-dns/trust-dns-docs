(function() {var implementors = {};
implementors["trust_dns"] = [{text:"impl&lt;Resp&gt; <a class=\"trait\" href=\"trust_dns_proto/xfer/dns_handle/trait.DnsHandle.html\" title=\"trait trust_dns_proto::xfer::dns_handle::DnsHandle\">DnsHandle</a> for <a class=\"struct\" href=\"trust_dns/client/struct.BasicClientHandle.html\" title=\"struct trust_dns::client::BasicClientHandle\">BasicClientHandle</a>&lt;Resp&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Resp: <a class=\"trait\" href=\"https://docs.rs/futures/0.1/futures/future/trait.Future.html\" title=\"trait futures::future::Future\">Future</a>&lt;Item = <a class=\"struct\" href=\"trust_dns/op/struct.DnsResponse.html\" title=\"struct trust_dns::op::DnsResponse\">DnsResponse</a>, Error = <a class=\"struct\" href=\"trust_dns_proto/error/struct.ProtoError.html\" title=\"struct trust_dns_proto::error::ProtoError\">ProtoError</a>&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:false,types:["trust_dns::client::client_future::BasicClientHandle"]},{text:"impl&lt;H&gt; <a class=\"trait\" href=\"trust_dns_proto/xfer/dns_handle/trait.DnsHandle.html\" title=\"trait trust_dns_proto::xfer::dns_handle::DnsHandle\">DnsHandle</a> for <a class=\"struct\" href=\"trust_dns/client/struct.MemoizeClientHandle.html\" title=\"struct trust_dns::client::MemoizeClientHandle\">MemoizeClientHandle</a>&lt;H&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;H: <a class=\"trait\" href=\"trust_dns/client/trait.ClientHandle.html\" title=\"trait trust_dns::client::ClientHandle\">ClientHandle</a>,&nbsp;</span>",synthetic:false,types:["trust_dns::client::memoize_client_handle::MemoizeClientHandle"]},];
implementors["trust_dns_integration"] = [{text:"impl&lt;O:&nbsp;<a class=\"trait\" href=\"trust_dns_integration/mock_client/trait.OnSend.html\" title=\"trait trust_dns_integration::mock_client::OnSend\">OnSend</a>&gt; <a class=\"trait\" href=\"trust_dns_proto/xfer/dns_handle/trait.DnsHandle.html\" title=\"trait trust_dns_proto::xfer::dns_handle::DnsHandle\">DnsHandle</a> for <a class=\"struct\" href=\"trust_dns_integration/mock_client/struct.MockClientHandle.html\" title=\"struct trust_dns_integration::mock_client::MockClientHandle\">MockClientHandle</a>&lt;O&gt;",synthetic:false,types:["trust_dns_integration::mock_client::MockClientHandle"]},];
implementors["trust_dns_proto"] = [];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
